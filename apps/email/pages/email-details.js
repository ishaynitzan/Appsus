export default {
  components: {},
  props: ["email"],
  template: `
      <section class="email-details flex column"> 
        <header class="flex space-between">
         <div></div>
          <div>
            <div class="fa fa-window-minimize" @click="$emit('close')"></div>
            <div class="fa fa fa-compress"></div>
            <div class="fa fa fa-times"></div>
          </div>
        </header>
        <div>From: <span>{{email.from}}</span></div>
        <div>Topic: <span>{{email.subject}}</span></div>
        <hr>
        <p>{{email.body}}</p>
        <hr>
        <nav class="flex">
          <div class="fa fa-reply"></div>
          <div class="fa fa fa-trash-o"></div>
          </nav>
      </section>
      `,
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {},
  destroyed() {},
  watch: {},
};
