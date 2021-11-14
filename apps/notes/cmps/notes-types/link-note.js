import { notesService } from "../../services/notes-service.js";
import { eventBus } from "../../../../js/services/event-bus.service.js";

export default {
    components: {
    },
    props: ['note'],
    template: `
        <div class="note link-note">
            <label>
                {{note.info.title}}
                <div>
                     <a :href="note.info.url">go to {{note.info.title}}</a>
                </div>
                <button @click="deleteNote(note.id)" class="note-btn fa fa-times"></button>
                <button @click="editNote(note.id)" class="note-btn fa fa-pencil-square-o"></button>
            </label>
        </div>
    `,
    data() {
        return {
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
};