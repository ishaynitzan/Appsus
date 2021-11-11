import { emailService } from "../services/email.service.js";
import { eventBus } from "../../../js/services/event-bus.service.js";
export default {
  components: {},
  props: [""],
  template: `
      <section  class="email-details flex column"> 
        <header class="flex space-between">
          <div></div>
          <div>
            <div class="fa fa fa-compress" @click.stop.prev="previousPage"></div>
          </div>
        </header>
        <div>From: <span>{{from}}</span></div>
        <div>Topic: <span>{{topic}}</span></div>
        <hr>
        <p>{{body}}</p>
        <hr>
        <nav class="flex">
          <div  class="fa fa-reply"></div>
          <div @click="deleteEmail(email.id)" class="fa fa fa-trash-o"></div>
        </nav>
    </section>
      `,
  data() {
    return {
      email: null,
      from: null,
      topic: null,
      body: null,
    };
  },
  created() {
    const { emailId } = this.$route.params;
    console.log(emailId);
    emailService.getById(emailId).then((email) => {
      this.email = email;
      this.from = email.from;
      this.topic = email.subject;
      this.body = email.body;
    });
  },
  methods: {
    previousPage() {
      this.$emit("previousPage");
    },
    deleteEmail(id) {
      if (confirm("Do you sure?")) {
        this.$emit("deleteEmail", id);
        this.previousPage();
      }
    },
  },
  computed: {},
  destroyed() {
    this.$router.push("/email").catch(() => {});
  },
  watch: {},
};
