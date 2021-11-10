import { booksService } from "../services/books.service.js";
import booksList from "../cmps/books-list.cmp.js";
import appFilter from "../cmps/app-filter.cmp.js";
import bookDetails from "../cmps/book-details.cmp.js";
import apiSearch from "../cmps/api-search.cmp.js";

export default {
  components: {
    booksService,
    booksList,
    appFilter,
    bookDetails,
    apiSearch,
  },
  props: [],
  template: `
    <section class="main-container">  
    <div class="change-search">
    <input type="radio" id="one" value="true" v-model="isApi">
    <label for="one">Search Store</label>
    <br>
    <input type="radio" id="two" value="false" v-model="isApi">
    <label for="two">Search Google</label>
    <br>
    </div>
        <app-filter v-if="changeSearch" @filtered="setFilter"/> 
        <api-search v-else/>
        <books-list v-if="books" :books="booksToShow" @selectedBook="setSelectedBook"/>
        <book-details v-if="selectedBook" @click.native.stop="selectedBook = null" :book="selectedBook"/>
    </section>
    `,
  data() {
    return {
      isApi: "true",
      books: null,
      selectedBook: null,
      filterBy: "name",
      filterVal: null,
    };
  },
  created() {
    this.setBooks();
  },
  methods: {
    setBooks() {
      if (!this.books) {
        booksService.query("books").then((books) => {
          this.books = books;
        });
      }
    },
    setSelectedBook(id) {
      this.selectedBook = this.books.filter((book) => book.id === id)[0];
      this.modalShow = true;
    },
    setFilter(filter) {
      this.filterBy = filter.filterBy;
      this.filterVal = filter.filterVal;
    },
  },
  computed: {
    booksToShow() {
      if (!this.filterBy || !this.filterVal) return this.books;
      const booksToShow = this.books.filter((book) => {
        if (this.filterBy === "Price") {
          return (
            book.listPrice.amount > +this.filterVal - 10 &&
            book.listPrice.amount < +this.filterVal + 10
          );
        } else {
          return book.title
            .toLowerCase()
            .includes(this.filterVal.toLowerCase());
        }
      });
      return booksToShow;
    },
    changeSearch(){
     return this.isApi === "true"  ? true: false;
    }
  },
  destroyed() {},
  watch :{
  }
};
