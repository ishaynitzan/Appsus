import { googleApi } from "../services/google-api.js";
import { booksService } from "../services/books.service.js";
export default {
  components: {},
  props: [],
  template: `
    <section class="filter">
        <input v-model="search"/>
        <button @click="searchApi" class="filter-btn">search</button>
    <section class="search-results" v-if="books">   
        <ul v-for="book in books">
          <li><div class="search-title">{{book.volumeInfo.title}}</div><button @click="saveBook(book)">+</button></li>
          <hr>
        </ul>     
    </section>
    </section>
    `,
  data() {
    return {
      search: null,
      books: null,
    };
  },
  created() {},
  methods: {
    searchApi() {
      googleApi.query(this.search).then((books) => {
        const result = books.data.items;
        console.log("api return", result);
        this.books = result;
      });
    },
    saveBook(book) {
      console.log(book);
      booksService.save(book);
    },
  },
  computed: {
  },
  destroyed() {},
};
