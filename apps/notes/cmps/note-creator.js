import { notesService } from "../services/notes-service.js";
const textNote = {
    props: ['data'],
    template: `
        <div>
        </div>
    `,
    data() {
        return {
            text: 'hello',
            title: 'hi',
        };
    },
    methods: {

        }
    };
const imageNote = {
    props: ['data'],
    template: `
        <div>
        <input type="link" v-model="note.info.url" placeholder="Enter image URL" @input="url">
        </div>
    `,
    data() {
        return {
            note:{
                info:{
                    url: null,
            }
        },
    };
},
    methods: {
        // send() {
        // this.$emit('getImage',info.url)
        // },
        url(){
            
        }

        }
    };
const todoNote = {
    props: ['data'],
    template: `
        <div>

        </div>
    `,
    data() {
        return {
            text: 'hello',
            title: 'hi',
        };
    },
    methods: {

        }
    };
const linkNote = {
    props: ['data'],
    template: `
        <div>
        <input type="link" v-model="info.url" placeholder="Enter URL">
        </div>
    `,
    data() {
        return {
            info: {
                url: null,
                text: 'hello',
                title: 'hi',
            },
        };
    },
    methods: {

        }
    };
const videoNote = {
    props: ['data'],
    template: `
        <div>
            <label>
               {{data.text}}
            </label>
        </div>
    `,
    data() {
        return {
            text: 'hello',
            title: 'hi',
        };
    },
    methods: {

        }
    };
const audioNote = {
    props: ['data'],
    template: `
        <div>
            <label>
               {{data.text}}
            </label>
        </div>
    `,
    data() {
        return {
            text: 'hello',
            title: 'hi',
        };
    },
    methods: {

        }
    };
const mapNote = {
    props: ['data'],
    template: `
        <div>
            <label>
               {{data.text}}
            </label>
        </div>
    `,
    data() {
        return {
            text: 'hello',
            title: 'hi',
        };
    },
    methods: {

        }
    };
const canvasNote = {
    props: ['data'],
    template: `
        <div>
            <label>
               {{data.text}}
            </label>
        </div>
    `,
    data() {
        return {
            text: 'hello',
            title: 'hi',
        };
    },
    methods: {

        }
    };
    

export default {
    components: {
        textNote,
        imageNote,
        todoNote,
        linkNote,
        videoNote,
        audioNote,
        mapNote,
        canvasNote,  
    },
    props: [],
    template: `
      <section class="note-creator flex column align-center"> 
        <div class="tab notes-tab flex ">Create a Note</div>
            <button class="tablinks" @click="notePicker('textNote')">Text</button>
            <button class="tablinks" @click="notePicker('imageNote')">Image</button>
            <button class="tablinks" @click="notePicker('todoNote')">To Do List</button>
            <button class="tablinks" @click="notePicker('linkNote')">Link</button>
            <button class="tablinks" @click="notePicker('videoNote')">Video</button>
            <button class="tablinks" @click="notePicker('audioNote')">Audio</button>
            <button class="tablinks" @click="notePicker('mapNote')">Map</button>
            <button class="tablinks" @click="notePicker('canvasNote')">Drawing</button>
         <input type="text" v-model="currNote.data.title" placeholder="Title">
         <component :is="currNote.type" :data="currNote" v-model="currNote"></component>
         <textarea v-model="currNote.data.text" placeholder="Text"></textarea>
         <button @click="saveNote">save</button>
      </section>
      `,
    data() {
      return {
        currNote: {
          data: {
            url: null,
            text: null,
            title: null,
          },
          type: null,
        },
      };
    },

    created() {  
    },
    methods: {
        saveNote(url) {
            const note =  {
                id: null,
                type: this.currNote.type,
                isPinned: false,
                info: this.currNote.data,             
                madeAt: Date.now(),
            };
            notesService.save(note).then(()=>{
                this.$emit("query")
            });
          },
        notePicker(kind) {
          const notePicked = kind;
          this.currNote.type = notePicked;
        },
    },
    computed: {
    },
    destroyed() {},
    watch :{
    }
  };
  