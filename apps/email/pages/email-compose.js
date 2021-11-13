import { emailService } from "../services/email.service.js";
import { utilService } from "../../../js/services/util-service.js";
export default {
  components: {},
  props: [],
  template: `
      <section class="email-compose flex column"> 
        <header class="flex space-between">
          <span>&nbsp&nbspCompose new mail</span>
          <div>
            <div class="btn fa fa-times"></div>
          </div>
        </header>
        <input type="text" v-model="to" placeholder="To:">
        <input type="text" v-model="subject" placeholder="Topic:">
        <textarea  v-model="body" name="" id="" cols="30" rows="10" ></textarea>
        <nav class="flex space-between">
          <button @click="sendEmail" :disabled="!to || !subject" class="send-btn"><div class="fa fa-send">&nbsp</div>Send</button>
          </nav>
      </section>
      `,
  data() {
    return {
      to: null,
      subject: null,
      body: null,
      draftInterval: null,
      draftId : utilService.makeId()
    };
  },
  created() {
    const id = this.$route.params.emailId;
    if(id){
      const email = emailService.getById(id).then((email)=>{
        this.to = email.from;
        this.subject = email.subject;
        this.body = email.body;
      });
    };
    this.draftInterval= setInterval(this.saveDraft,5000);
  },
  methods: {
    sendEmail() {
      const email = {
        id: null,
        subject: this.subject,
        body: this.body,
        isRead: true,
        sentAt: Date.now(),
        from: "team2@email.com",
        to: this.to,
      };
      if (!this.body) {
        if (!confirm("Send the mail without text?")) {
          return;
        }
      }
      emailService.save(email).then(() => {
        this.$emit("filterBy", "inbox");
      });
    },
    saveDraft(draft){
      console.log(draft);
    }
  },
  computed: {
  },
  destroyed() {
    clearInterval(this.draftInterval);
  },
  watch: {},
};
