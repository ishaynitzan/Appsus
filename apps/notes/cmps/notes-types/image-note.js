import { notesService } from "../../services/notes-service.js";
import { eventBus } from "../../../../js/services/event-bus.service.js";

export default {

    components: {
    },
    props: ['note'],
    template: `
    <section class="note image-note">
        <h5>{{note.info.title}}</h5>
        <h6>{{note.info.txt}}</h6>
        <img :src="note.info.url"/>
        <nav>
            <button @click="deleteNote(note.id)">X</button>
            <button @click="editNote(note.id)">EDIT</button>
        </nav>
    </section>
    `,
    data() {
        return {
            txt: '',
        };
    },
    methods: {
        deleteNote(id) {
            if(confirm('Are you sure?')){
                notesService.remove(id).then(() => {
                    eventBus.$emit("query");
                });
        }
    },
        editNote(id) {

        },


    },
 
    computed: {
        
       
    
       
    },
    destroyed() {

    },
}