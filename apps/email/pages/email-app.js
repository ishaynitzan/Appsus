import { emailService } from "../services/email.service.js";
import emailFilter from "../cmps/email-filter.cmp.js";
import folderList from "../cmps/email-folder-list.cmp.js";
import emailList from "../cmps/email-list.cmp.js";
import mailPreview from "../cmps/email-preview.cmp.js";
import compose from "../pages/email-compose.js";
import { eventBus } from "../../../js/services/event-bus.service.js";

export default {
  name: "email-app",
  components: {
    emailFilter,
    folderList,
    emailList,
    mailPreview,
    compose,
  },
  props: [],
  template: `
    <section class="email-app flex">
      <folder-list @filterBy="setFilter" class="main-container"/>
      <section class="email-body main-container flex column">
        <email-filter :unreadMail="unread"/>
        <compose v-if="filterBy === 'new'"/>
        <email-list v-else :emailsToShow="emailsToShow"/>
      </section>
    </section>
    `,
  data() {
    return {
      emails: null,
      filterBy: null,
      unread: null,
    };
  },
  created() {
    this.loadEmail();
    eventBus.$on("changeOpenMail", this.changeOpenMail);
  },
  methods: {
    loadEmail() {
      emailService.query().then((emails) => {
        this.emails = emails;
        this.unread = emails.filter((email) => email.isRead === false).length;
      });
    },
    changeOpenMail(id) {
      emailService.getById(id).then((email) => {
        email.isRead = !email.isRead;
        emailService.save(email);
        eventBus.$emit(`changeOpenMail-${email.id}`, email.isRead);
        this.loadEmail();
      });
    },
    setFilter(filter) {
      this.filterBy = filter;
    },
  },
  computed: {
    emailsToShow() {
      if(!this.emails) return
      switch (this.filterBy) {
        case "sent":
          console.log("switch sent");
          return this.emails.filter(
            (email) => email.from === "team2@email.com"
          );
        default:
          case "all":
          console.log("switch all");
          return this.emails.filter(
            (email) => email.from !== "team2@email.com"
          );
      }
    },
  },
  destroyed() {},
  watch: {},
};
