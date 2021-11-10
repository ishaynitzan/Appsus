import notePrev from "../cmps/note-preview.js";
import noteCreator from "../cmps/note-creator.js";
import noteFilter from "../cmps/note-filter.js";
import noteSearch from "../cmps/note-search.js";


export default {
  components: {
    notePrev,
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
    <note-prev/>
  </section>
    `,
};
