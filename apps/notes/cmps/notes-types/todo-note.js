import { notesService } from "../../services/notes-service.js";
import { eventBus } from "../../../../js/services/event-bus.service.js";

export default {
    components: {
    },
    props: ['note'],
    template: `
    <section class="note todo-note">
        <h5>{{note.info.title}}</h5>
        <h6>{{note.info.txt}}</h6>
        <ul>
            <li v-for="(todo, idx) in note.info.todos" :key="idx">
            <div class="fa fa-check-circle-o">
            <h6>{{todo.text}}</h6>
                    </div>            </li>
        </ul>
                <nav><button @click="deleteNote(note.id)" class="note-btn fa fa-times"></button>
                <button @click="editNote(note.id)" class="note-btn fa fa-pencil-square-o"></button></nav>
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
            this.$emit("editNote", id);
        },


    },
 
    computed: {
        
       
    
       
    },
    destroyed() {

    },
};

//             <select v-model="selectedOpt">
//<option v-for="opt in data.opts">{{opt}}</option>
//</select>