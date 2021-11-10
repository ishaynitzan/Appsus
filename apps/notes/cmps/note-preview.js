export default {

    components: {
    },
    props: ["note"],
    template: `
    <ul>
        <h2>note</h2> 
        <li>v-for=“(note, idx) in gNotes"</li>
    </ul>
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