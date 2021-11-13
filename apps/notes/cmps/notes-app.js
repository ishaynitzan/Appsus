import notesList from "../cmps/notes-list.js";
import noteCreator from "../cmps/note-creator.js";
import noteFilter from "../cmps/note-filter.js";
import noteSearch from "../cmps/note-search.js";
import { notesService } from "../services/notes-service.js";
import { eventBus } from "../../../js/services/event-bus.service.js";


export default {
  components: {
    notesList,
    noteCreator,
    noteFilter,
    noteSearch,
  },
  props: [],
  data() {
    return {
      notes: null,
      filterBy: null,
      isNoteCreatorOpen: false,
      sortNotes: "new forward",
      noteToEdit: null
    };
  },
  created() {
    this.query();
    eventBus.$on("query",this.query);
  },
  methods: {

    query() {
      console.log('query');
      notesService.query().then((notesFromStorage) => {
        this.notes = notesFromStorage;
      });
    },
    setFilter(filter) {
      this.filterBy = filter;
    },
    deleteNote(id) {
      notesService.remove(id).then(() => {
        this.query();
      });
    },
    openEdit(id) {
    notesService.getById(id).then((note) => {
        this.noteToEdit = note;
        console.log(this.noteToEdit);
        this.setIsNoteCreatorVis();
      });
    },
    setIsNoteCreatorVis(){
      this.isNoteCreatorOpen = !this.isNoteCreatorOpen;
    },
    setSort(val) {
      this.sortNotes = val;
    },
    sortBy(notes) {
      switch (this.sortNotes) {
        case "old forward":
          return notes.sort((a, b) => {
            if (a.madeAt < b.madeAt) return -1;
            if (a.madeAt > b.madeAt) return 1;
            return 0;
          });
        case "new forward":
        default:
          return notes.sort((a, b) => {
            if (a.madeAt > b.madeAt) return -1;
            if (a.madeAt < b.madeAt) return 1;
            return 0;
          });
      }
    },
  },
  computed: {
    notesForPreview(){
      if(!this.notes) return;
      console.log(this.filterBy, 'in preview')
        var notesForList = null;
        switch (this.filterBy) {
          case "textNote":
            notesForList = this.notes.filter(note => note.type === "textNote");
            break;
          case "linkNote":
            notesForList = this.notes.filter(note => note.type === "linkNote");
            break;
          case "imageNote":
            notesForList = this.notes.filter(note => note.type === "imageNote");
            break;
          case "todoNote":
            notesForList = this.notes.filter(note => note.type === "todoNote");
            break;
          default:
          case "all":
            notesForList = this.notes;
            break;
        }
      console.log(notesForList)
      return this.sortBy(notesForList);
      }
    },
    destroyed() {},
    watch: {},
    template: `
    <section class="notes-app flex">  
      <note-filter @filterBy="setFilter" class="main-container"/>
      <section class="notes-body main-container flex column">
         <h1>Welcome to Notes</h1>
          <note-search class="note-search"/>
          <button @click="setIsNoteCreatorVis" class="createNote note-editor">Editor</button>
          <note-creator v-if="isNoteCreatorOpen" :noteToEdit="noteToEdit" @sendQuery="query" @onClose="setIsNoteCreatorVis" />
           <notes-list :notes="notesForPreview" @editNote="openEdit"/>
        </section>
    </section>
      `,
  };
  
  
  