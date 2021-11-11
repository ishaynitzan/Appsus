export default {

    components: {
    },
    name:"previewnote",
    props: ["note"],
    template: `
    <section class="note">
        <h5>My Note</h5>
        <h6>{{note.info.txt}}</h6>
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