import notesList from "../cmps/notes-list.js";
import noteCreator from "../cmps/note-creator.js";
import noteFilter from "../cmps/note-filter.js";
import noteSearch from "../cmps/note-search.js";
import { notesService } from "../services/notes-service.js";


export default {
  components: {
    notesList,
    noteCreator,
    noteFilter,
    noteSearch,
  },
  name:"noteapp",
  props: [],
  template: `
  <section class="notes-app flex">  
    <note-filter @filterBy="setFilter" class="main-container"/>
    <section class="notes-body main-container flex column">
      <h1>Welcome to Notes</h1>
      <input type="text"> 
      <note-search/>
      <note-creator/>
      <notes-list :notes="notesForPreview"/>
      </section>
  </section>
    `,
    data() {
      return {
        notes: null,
        filterBy: null
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
      setFilter(filterBy) {
        this.filterBy = filterBy
    },
    },
    computed: {
      notesForPreview(){
        if (!this.filterBy) return this.notes;
      }
    },
    destroyed() {},
    watch: {},
  };
  

