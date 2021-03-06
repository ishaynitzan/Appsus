import { emailService } from "../services/email.service.js";
import { eventBus } from "../../../js/services/event-bus.service.js";
export default {
  components: {},
  props: [""],
  template: `
      <section  class="email-details flex column grow-1"> 
        <header class="flex space-between">
          <div></div>
          <div>
            <div @click.stop.prev="previousPage" class="btn fa fa-compress" title="Compress"></div>
          </div>
        </header>
        <div>From: <span>{{from}}</span></div>
        <hr>
        <div>Topic: <span>{{topic}}</span></div>
        <hr>
        <p class="flex column grow-1">{{body}}</p>
        <hr>
        <nav class="flex row align-center">
          <div  class="btn fa fa-reply" title="Reply"></div>
          <div @click="deleteEmail(email.id)" class="btn fa fa-trash-o" title="Delete"></div>
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
      if (confirm("are you sure?")) {
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
