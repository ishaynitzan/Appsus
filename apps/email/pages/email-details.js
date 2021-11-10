
export default {
    components: {  
    },
    props: [],
    template: `
      <section class="email-details flex column"> 
        <header class="flex space-between">
          <span>New Message</span>
          <div>
            <div class="fa fa-window-minimize"></div>
            <div class="fa fa fa-compress"></div>
            <div class="fa fa fa-times"></div>
          </div>
        </header>
        <div>From: <span></span></div>
        <div>Topic: <span></span></div>
        <p></p>
        <nav class="flex space-between">
          <button>Send</button>
          <div class="fa fa fa-trash-o"></div>
          </nav>
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
  