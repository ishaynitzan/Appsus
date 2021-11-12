import { notesService } from "../services/notes-service.js";
const textBox = {
    props: ['data'],
    template: `
        <div>
            <label>
               kdhjbkdbkdb {{data.text}}
            </label>
        </div>
    `,
    data() {
        return {
            txt: 'thetrertger',
            title: 'dddd',
        };
    },
    methods: {

        }
    };

export default {
    components: {
        textBox,  
    },
    props: [],
    template: `
      <section class="note-creator flex column align-center"> 
        <div class="tab notes-tab">there's adynamic cmp below
        </div>
            <component :is="currNote.type" 
                        :data="currNote.data">
            </component>
         <input type="text" v-model="currNote.data.title" placeholder="Title">
         <textarea v-model="currNote.data.text" placeholder="Edit me"></textarea>
         <button @click="saveNote">save</button>
      </section>
      `,
    data() {
      return {
        currNote: {
          data: {
            text: "dvkjhdvjkhdv",
            title: this.title,
          },
          type: "textBox",
        },
      };
    },
    //<component :is ="currNote.type" :data="currNote.data"></component>
    // <button class="tablinks" @click="notePicked("text")">Text</button>
    // <button class="tablinks" @click="notePicked("Image")">Image</button>
    // <button class="tablinks" @click="notePicked("textBox")">TextBox</button>
    created() {  
    },
    methods: {
        saveNote() {
            const note =  {
                id: null,
                type: 'textNote',
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
        notePicker(kind) {
          const notePicked = kind;
          currNote.type = notePicked;
        }
    },
    computed: {
    },
    destroyed() {},
    watch :{
    }
  };
  