
export default {
    components: {  
    },
    props: ['searchKey'],
    template: `
      <section class="search-bar flex justify-center">  
            <input @input="filter" v-model="search" type="search" class="search-input" placeholder="Search:"> 
        <div @click class="fa fa-search"></div>
      </section>
      `,
    data() {
      return {
        search: null,
      };
    },
    created() {  
    },
    methods: {
      filter(){
        this.$emit('search',this.search );
      },
    },
    computed: {
    },
    destroyed() {},
    watch :{
      searchKey : function(newVal,oldVal){
        console.log(newVal)
        if (!newVal) this.search='';
      }
    }
  };
  