
export default {
    components: {  
    },
    props: ['unreadMail'],
    template: `
    <section>
      <section class="email-filter flex space-evenly align-center justify-center"> 
          <div class="fa fa-sliders"></div>
          <input @input="filter" v-model="search" type="text"> 
          <div class="fa fa-search"></div>
      </section>
      <section class="email-sort flex align-center space-between"> 
        <div class="flex space-evenly align-center justify-center">
        <div @click="sortEmail('alpha asc')" class="fa fa-sort-alpha-asc"></div>
        <div @click="sortEmail('alpha desc')" class="fa fa-sort-alpha-desc"></div>
        <div @click="sortEmail('old forward')" class="fa fa-calendar-minus-o"></div>
        <div @click="sortEmail('new forward')" class="fa fa-calendar-plus-o"></div>
        </div>
        <div @click="showUnread('unread')" ><div><span class="fa fa-envelope"></span>:{{unreadMail}}</div></div>

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
  