import { notesService } from "../services/notes-service.js";

const textNote = {
    props: ['data'],
    template: `
        <div>
        </div>
    `,
    data() {
        return {
            note:{
                info:{
                    text: null,
                    title:null,
                },
                type: "textNote",
        },
        };
    },
    methods: {

        }
    };
const imageNote = {
    props: ['data'],
    template: `
        <div>
        <input type="link" v-model="note.info.url" placeholder="Enter image URL" @input="reportVal">
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
        reportVal() {
            this.$emit('setInput', this.note);
        },


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
    props: ['onClose', 'noteToEdit'],
    template: `
      <section class="note-creator flex column align-center"> 
      <div class="modal-bg">
        <div class="modal">
        <button @click="closeNote" class="close-modal tablinks fa fa-times"></button>
        <h3 :"noteHeader">{{noteHeader}}</h3>
        <div class="tab notes-tab flex-row">
            <button class="tablinks fa fa-file-text-o" title="Text Note" @click="notePicker('textNote')"></button>
            <button class="tablinks fa fa-picture-o" title="Image Note" @click="notePicker('imageNote')"></button>
            <button class="tablinks fa fa-list" title="List Note" @click="notePicker('todoNote')"></button>
            <button class="tablinks fa fa-link" title="Link Note" @click="notePicker('linkNote')"></button>
            <button class="tablinks fa fa-youtube" title="Video Note" @click="notePicker('videoNote')"></button></div>
            <div class="flex column">
         <input type="text" v-model="currNote.data.title" placeholder="Title">
         <component :is="currNote.type" :data="currNote" @setInput="setInput"></component>
         <textarea v-model="currNote.data.text" placeholder="Text"></textarea></div>
         <button @click="saveNote" class="close-modal tablinks fa fa-floppy-o"></button></div></div>
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
        noteHeader: 'New Note:'
      };
    },
    created()  {
            console.log(this.noteToEdit);
            if(this.noteToEdit && this.noteToEdit.id) {
            this.noteHeader = 'Edit your note:';
            this.currNote.id = this.noteToEdit.id;
            this.currNote.data.text = this.noteToEdit.info.text;
            this.currNote.data.title = this.noteToEdit.info.title;
            } 
    },
    methods: {
        saveNote() {
            console.log('savenote start');
            const note =  {
                id: null,
                type: this.currNote.type ? this.currNote.type: "textNote",
                isPinned: false,
                info: this.currNote.data,             
                madeAt: Date.now(),
            };
            notesService.save(note).then(()=>{
                this.$emit("sendQuery");
                this.$emit("onClose");
                this.currNote = null;
                this.noteHeader = 'New Note:';
            });
          },
        setEditNote(){
            this.currNote = this.noteToEdit;
            console.log(this.noteToEdit);
        },
        closeNote() {
            this.$emit("onClose");
        },
    
        notePicker(kind) {
          const notePicked = kind;
          this.currNote.type = notePicked;
        },
        setInput(note) {
            if (note.info.url) this.currNote.data.url = note.info.url;
            if (note.info.url) this.currNote.data.url = note.info.url;
        },
    },
    computed: {
    

    },
    destroyed() {},
    watch :{
    }
  };
  
//   <button class="tablinks" @click="notePicker('audioNote')">Audio</button>
//   <button class="tablinks" @click="notePicker('mapNote')">Map</button>
//   <button class="tablinks" @click="notePicker('canvasNote')">Drawing</button></div>