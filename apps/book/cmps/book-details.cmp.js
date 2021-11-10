import bookDescription from "./book-description.cmp.js";

export default {
  components: {
    bookDescription,
  },
  props: ["book"],
  template: `
    <div class="book-details">
    <h2>Book Details</h2>
    <img v-if="book.listPrice.isOnSale" class="on-sale" src="../imgs/sale.png"/>
    <img :src="book.thumbnail"/>
        <h4>{{book.title}}</h4>    
        <h4 :class="price">{{bookPrice}}</h4>    
        <h4>{{bookAuthors}}</h4>    
        <h4>{{bookCategories}}</h4>    
        <h4>{{pageCount}}</h4>    
        <h4>{{publishedDate}}</h4>  
        <br>
        <router-link :to="'/bookApp/review/'+ book.id" class="review-btn">Add review</router-link> 
        <br><br>
        <hr>
        <br>
        <book-description :description="description" />
    </div>
    `,
  data() {
    return {
      price: "",
    };
  },
  created() {},
  methods: {},
  computed: {
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
    description() {
      return this.book.description;
    },
  },
  destroyed() {},
};
