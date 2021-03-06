import { notesService } from "../../services/notes-service.js";
import { eventBus } from "../../../../js/services/event-bus.service.js";

export default {

    components: {
    },
    props: ['note'],
    template: `
    <section class="note image-note">
        <h5>{{note.info.title}}</h5>
        <h6>{{note.info.text}}</h6>
        <img :src="note.info.url" class="img-preview">
        <nav><button @click="deleteNote(note.id)" class="note-btn fa fa-times"></button>
        <button @click="editNote(note.id)" class="note-btn fa fa-pencil-square-o"></button></nav>
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
            this.$emit("editNote", id);
        },


    },
 
    computed: {
        
       
    
       
    },
    destroyed() {

    },
}