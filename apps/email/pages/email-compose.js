import { emailService } from "../services/email.service.js";

export default {
  components: {},
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
        <input type="text" v-model="to" placeholder="To">
        <input type="text" v-model="subject" placeholder="Topic">
        <textarea  v-model="body" name="" id="" cols="30" rows="10" ></textarea>
        <nav class="flex space-between">
          <button @click="sendEmail">Send</button>
          <div class="fa fa fa-trash-o"></div>
          </nav>
      </section>
      `,
  data() {
    return {
      to: null,
      subject: null,
      body: null,
    };
  },
  created() {},
  methods: {
    sendEmail() {
      const email =  {
        id: null,
        subject: this.subject,
        body: this.body,
        isRead: true,
        sentAt: Date.now(),
        from: "team2@email.com",
        to: this.to,
      };
      emailService.save(email);
    },
  },
  computed: {},
  destroyed() {},
  watch: {},
};
