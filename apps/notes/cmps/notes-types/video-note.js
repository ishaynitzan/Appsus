import { notesService } from "../../services/notes-service.js";
import { eventBus } from "../../../../js/services/event-bus.service.js";

export default {
    components: {
    },
    props: ['data'],
    template: `
        <div class="row">
            <label>
                {{data.label}}
                <input type="number" v-model.number="range.min" /> -
                <input type="number" v-model.number="range.max" @blur="reportVal" />
            </label>
        </div>
    `,
    data() {
        return {
            range: { min: this.data.min, max: this.data.max }
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