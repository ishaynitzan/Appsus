import bookPreview from "./book-preview.cmp.js"

export default {

    components: {
        bookPreview
    },
    props: ["books"],
    template: `
  <ul class="book-list"  > 
          <book-preview :book="book" v-for="book in books" :key="book.id" @click.native="$emit('selectedBook',book.id)" class="book-preview"/>
 </ul>
    `,
    data() {
        return{
            
        }
    },
    created(){

    },
    methods: {

    },
    computed: {

    },
    destroyed(){
        
    }

}