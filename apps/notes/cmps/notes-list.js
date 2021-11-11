import notePreview from './note-preview.js'

export default {

    components: {
        notePreview
    },
    props: ["notes"],
    template: `
    <section class="notes-list">
        <ul>
           <li v-for="note in notes" :key="note.id" class="note-preview-container flex">
                <div class="justify-center align-center flex column">
                    <note-preview :note="note" @click="enterNote(note.id)"/>
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