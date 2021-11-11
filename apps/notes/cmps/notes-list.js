import notePreview from './note-preview.js'

export default {

    components: {
        notePreview
    },
    props: ["notes"],
    template: `
    <section>
        <ul class="notes-preview">
           <li v-for="note in notes" :key="note.id" class="note-preview-container flex">
                <div class="justify-center align-center flex column">
                    <note-preview :note="note" @click="enterNote(note.id)"/>
                    <button @click="deleteNote(note.id)">X</button>
                    <button @click="editNote(note.id)">EDIT</button>
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
        deleteNote(id) {

        },
        editNote(id) {

        }


    },
    computed: {
        
       
    
       
    },
    destroyed() {

    }

}