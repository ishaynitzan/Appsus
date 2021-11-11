import notePreview from "../cmps/note-preview.js";
import noteCreator from "../cmps/note-creator.js";
import noteFilter from "../cmps/note-filter.js";
import noteSearch from "../cmps/note-search.js";
import { notesService } from "../services/notes-service.js";


export default {
  components: {
    notePreview,
    noteCreator,
    noteFilter,
    noteSearch,
  },
  props: [],
  template: `
  <section class="main-container">  
    <h1>Welcome to Notes</h1>
    <input type="text"> 
    <note-filter/>
    <note-search/>
    <note-creator/>
    <note-preview :notes="notesForPreview"/>
  </section>
    `,
    data() {
      return {
        notes: null,
      };
    },
    created() {
      this.query();
    },
    methods: {
      query() {
        notesService.query().then((notesFromStorage) => {
          this.notes = notesFromStorage;
          console.log('this.notes', this.notes);
        });
      },
    },
    computed: {
      notesForPreview(){
        return this.notes;
      }
    },
    destroyed() {},
    watch: {},
  };
  

