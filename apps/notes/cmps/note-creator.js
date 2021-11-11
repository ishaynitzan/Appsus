import { notesService } from "../services/notes-service.js";

export default {
    components: {  
    },
    props: [],
    template: `
      <section class="note-creator flex column align-center">  
        <input type="text" v-model="title" placeholder="Title">
        <textarea v-model="text" placeholder="Edit me"></textarea>
        <button @click="saveNote">save</button>
      </section>
      `,
    data() {
      return {
          text: this.text,
          title: this.title,


      };
    },
    created() {  
    },
    methods: {
        saveNote() {
            const note =  {
                id: null,
                type: "note-txt",
                isPinned: false,
                info: {
                    txt: this.text,
                    title: this.title,
                    },
                madeAt: Date.now(),
            };
            notesService.save(note).then(()=>{
                this.$emit("query")
            });
          },
    },
    computed: {
    },
    destroyed() {},
    watch :{
    }
  };
  