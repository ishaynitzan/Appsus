
export default {
    components: {  
    },
    props: ['unreadMail'],
    template: `
    <section>
      <section class="email-filter flex space-evenly align-center justify-center"> 
          <input @input="filter" v-model="search" type="text"> 
          <div class="btn fa fa-search" title="Search"></div>
      </section>
      <section class="email-sort flex align-center space-between"> 
        <div class="flex space-evenly align-center justify-center">
        <div @click="sortEmail('alpha asc')" class="btn fa fa-sort-alpha-asc" title="Sort A-Z"></div>
        <div @click="sortEmail('alpha desc')" class="btn fa fa-sort-alpha-desc" title="Sort Z-A"></div>
        <div @click="sortEmail('old forward')" class="btn fa fa-calendar-minus-o" title="Oldest first"></div>
        <div @click="sortEmail('new forward')" class="btn fa fa-calendar-plus-o" title="Newest first"></div>
        </div>
        <div @click="showUnread('unread')" ><div><span class="btn fa fa-envelope" title=" Show unread" ></span>:{{unreadMail}}</div></div>

      </section>
      </section>
      `,
    data() {
      return {
        search: null
      };
    },
    created() {  
    },
    methods: {
      filter(){
        this.$emit('search',this.search );
      },
      showUnread(filter){
        this.active = filter;
        this.$emit("showUnread", filter)
      },
      sortEmail(val){
        this.$emit("sortEmail", val)

      }
    },
    computed: {
    },
    destroyed() {},
    watch :{
    }
  };
  