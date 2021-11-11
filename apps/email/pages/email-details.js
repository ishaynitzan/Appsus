import { emailService } from "../services/email.service.js";
import { eventBus } from "../../../js/services/event-bus.service.js";
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
          </div>
        </header>
        <div>From: <span>{{email.from}}</span></div>
        <div>Topic: <span>{{email.subject}}</span></div>
        <hr>
        <p>{{email.body}}</p>
        <hr>
        <nav class="flex">
          <div class="fa fa-reply"></div>
          <div @click="deleteEmail(email.id)" class="fa fa fa-trash-o"></div>
          </nav>
      </section>
      `,
  data() {
    return {};
  },
  created() {},
  methods: {
    deleteEmail(id){
      if(confirm('Do you sure?')){
      this.$emit('close')
      eventBus.$emit("deleteEmail",id)
      }
    }
  },
  computed: {},
  destroyed() {},
  watch: {},
};
