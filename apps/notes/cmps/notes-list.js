// import audioNote from '../cmps/notes-types/audio-note.js';
// import canvasNote from '../cmps/notes-types/canvas-note.js';
 import imageNote from '../cmps/notes-types/image-note.js';
// import linkNote from '../cmps/notes-types/link-note.js';
// import mapNote from '../cmps/notes-types/map-note.js';
import textNote from '../cmps/notes-types/text-note.js';
// import todoNote from '../cmps/notes-types/todo-note.js';
// import videoNote from '../cmps/notes-types/video-note.js';

export default {

    components: {
        // audioNote,
        // canvasNote,
        imageNote,
        // linkNote,
        // mapNote,
        textNote,
        // todoNote,
        // videoNote,
    },
    props: ["notes"],
    template: `
    <section class="notes-list">
        <ul>
           <li v-for="note in notes" :key="note.id" class="note-preview-container flex">
                <div class="justify-center align-center flex column">
                    <component :is="note.type" :note="note" @click="seeNote(note.id)"> </component>
                 </div>
           </li>
        </ul>
    </section>
    `,
    data() {
        return {
        }
    },
    created() {
        

    },
    methods: {
        

    },
    computed: {
        
       
    
       
    },
    destroyed() {

    }

}

//                   <note-preview :note="note" @click="enterNote(note.id)"/>