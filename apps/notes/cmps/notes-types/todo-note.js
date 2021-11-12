import { notesService } from "../../services/notes-service.js";
import { eventBus } from "../../../../js/services/event-bus.service.js";

export default {
    components: {
    },
    props: ['data'],
    template: `
    <section class="note todo-note">
        <h5>{{note.info.title}}</h5>
        <h6>{{note.info.txt}}</h6>
                <select v-model="selectedOpt" @blur="reportVal">
                    <option v-for="opt in data.opts">{{opt}}</option>
                </select>
                <nav><button @click="deleteNote(note.id)">X</button>
                <button @click="editNote(note.id)">EDIT</button></nav>
        </section>
    `,
    data() {
        return {
            selectedOpt: '',
        };
    },
    methods: {
        reportVal() {
            this.$emit('setInput', this.selectedOpt);
        },
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
};