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
    setIsNoteCreatorVis(){
      this.isNoteCreatorOpen = !this.isNoteCreatorOpen;
    },
  },
  computed: {
    notesForPreview(){
      console.log('in preview')
      if (!this.filterBy) {
        return this.notes;
      } else {
        var notesForList = null;
        switch (this.filterBy) {
          case "textNote":
            notesForList = this.notes.filter(note => this.notes.type === "textNote");
            break;
          case "linkNote":
            notesForList = this.notes.filter((note) => {
              if (email.from === "team2@email.com" && !email.atTrash)
                return true;
            });
            break;
          case "imageNote":
            notesForList = this.notes.filter((note) => {
              if (email.isRead === false && !email.atTrash) return true;
            });
            break;
          case "todoNote":
            notesForList = this.notes.filter((note) => email.atTrash);
            break;
          default:
          case "all":
            notesForList = this.notes.filter((note) => {
              if (email.from !== "team2@email.com" && !email.atTrash)
                return true;
            });
            break;
        }
      }
      return notesForList;
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
          <note-creator v-if="isNoteCreatorOpen" @sendQuery="query" @onClose="setIsNoteCreatorVis" />
           <notes-list :notes="notesForPreview"/>
        </section>
    </section>
      `,
  };
  
  
  