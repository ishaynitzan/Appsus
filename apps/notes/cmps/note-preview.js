export default {

    components: {
    },
    props: ["notes"],
    template: `
    <section>
        <ul>
           <li v-for="note in notes" :key="note.id">
                <div class="normal-note-pre"> {{ note.info.txt }} </div>
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