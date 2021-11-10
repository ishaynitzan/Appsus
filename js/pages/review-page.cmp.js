import { booksService } from "../services/books.service.js";
import { eventBus } from "../services/event-bus.service.js";

export default {
  name: "review-page",
  components: {},
  props: [],
  template: `
    <section class="review-page main-container" v-if="book">
        <section class="form-container">
            <form @submit.prevent="save">
            <h2>Tell us about<br>your experience</h2>
            <div>your name <input v-model="review.name" type="text"></div><br>                   
            <div>
              Your review<br><textarea v-model="review.txt" cols="30" rows="10"></textarea>
            </div><br>                   
            <div><span v-for="num in 5" class="fa fa-star review-star" :class="{checked: num<=review.rate}" @mouseover="addRate(num)"></span></div>                     
            <button type="submit" :disabled="!review.txt || !review.name || !review.rate">Save</button>                
            </form>
        <table>
          <thead>
          <tr>
            <th>review</th>
            <th>delete</th> 
          </tr>   
          </thead>
          <tbody>
          <template v-for="review in reviews">
          <tr>
            <th>{{review.name}}|{{review.txt}}|{{review.rate}}</th>
            <th>x</th> 
          </tr>  
          </template>
          </tbody>
        </table>  
        </section> 
        <section class="review-details">
            <div>
            <h2>Did you enjoy<br>"{{book.title}}"?</h2>    
            <br>
            <img :src="book.thumbnail"/>
            </div> 
        </section>
    </section>
  `,
  data() {
    return {
      book: null,
      reviews: null,
      bookId: this.$route.params.bookId,
      review: {
        bookId: this.$route.params.bookId,
        name: null,
        txt: null,
        rate: 0,
      },
    };
  },
  created() {
    const id = this.$route.params.bookId;
    booksService.getById(id).then((book) => {
      this.book = book;
    });
    
    booksService.getReviewById(this.$route.params.bookId).then((reviews) => {
      this.reviews = reviews;
    });
  },
  methods: {
    setReviews() {
      console.log('test');
      booksService.getReviewById(this.bookId).then((reviews) => {
        this.reviews = reviews;
      });
    },
    save() {
      booksService.save(this.review)
        .then(() => {
          this.setReviews();
          const msg = {
            txt: "Save successfully",
            type: "success",
          };
          eventBus.$emit("msg", msg);
        })
        .catch(() => {
          const msg = {
            txt: "Save failed",
            type: "error",
          };
          eventBus.$emit("msg", msg);
        });

    },
    addRate(num) {
      this.review.rate = num;
    },
  },
  computed: {
    showReviews(){
      
    },
    bookPrice() {
      const price = this.book.listPrice.amount;
      const currency = this.book.listPrice.currencyCode;
      const onSale = this.book.listPrice.onSale;
      this.price = price < 20 ? "green" : price > 150 ? "red" : "";
      var currencyCode =
        currency === "ILS" ? "₪" : currency === "USD" ? "$" : "€";
      return "" + price + currencyCode;
    },
    bookAuthors() {
      const authors = this.book.authors;
      return "Authors: " + authors.join();
    },
    bookCategories() {
      const categories = this.book.categories;
      return "Categories: " + categories.join();
    },
    pageCount() {
      const pageCount = this.book.pageCount;
      return pageCount > 500
        ? "Long reading"
        : pageCount > 200
        ? "Decent reading"
        : "Light reading";
    },
    publishedDate() {
      const date = this.book.publishedDate;
      const currentYear = new Date();

      return currentYear.getFullYear() - date > 1 ? "Veteran Book" : "New!";
    },
  },
  destroyed() {},
};
