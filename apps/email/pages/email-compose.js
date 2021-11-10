
export default {
    components: {  
    },
    props: [],
    template: `
      <section class="email-compose flex column"> 
        <header class="flex space-between">
          <span>New Message</span>
          <div>
            <div class="fa fa-window-minimize"></div>
            <div class="fa fa fa-compress"></div>
            <div class="fa fa fa-times"></div>
          </div>
        </header>
        <input type="text" placeholder="To">
        <input type="text" placeholder="Topic">
        <textarea name="" id="" cols="30" rows="10" ></textarea>
        <nav class="flex space-between">
          <button>Send</button>
          <div class="fa fa fa-trash-o"></div>
          </nav>
      </section>
      `,
    data() {
      return {};
    },
    created() {  
    },
    methods: {
    },
    computed: {
    },
    destroyed() {},
    watch :{
    }
  };
  