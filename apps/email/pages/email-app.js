import { emailService } from "../services/email.service.js";
import emailFilter from "../cmps/email-filter.cmp.js";
import folderList from "../cmps/email-folder-list.cmp.js";
import emailList from "../cmps/email-list.cmp.js";
import mailPreview from "../cmps/email-preview.cmp.js";
import composeEmail from "../pages/email-compose.js";
import emailDetails from "./email-details.js";
import { eventBus } from "../../../js/services/event-bus.service.js";

export default {
  name: "email-app",
  components: {
    emailFilter,
    folderList,
    emailList,
    mailPreview,
    composeEmail,
    emailDetails,
  },
  props: [],
  template: `
    <section class="email-app flex">
      <folder-list @filterBy="setFilter" class="main-container"/>
      <section class="email-body main-container flex column">
        <email-filter  @search="setSearchKey" :unreadMail="unread" @showUnread="setFilter" @sortEmail="setSort" />
        <compose-email v-if="filterBy === 'new'"/>
        <email-details v-else-if="filterBy === 'details'" @previousPage="setFilter(prevFilterBy)"  @deleteEmail="deleteEmail"/>
        <email-list v-else :emailsToShow="emailsToShow" @openDetails="setFilter('details')"/>
      </section>
    </section>
    `,
  data() {
    return {
      emails: null,
      filterBy: null,
      prevFilterBy: null,
      searchKey: null,
      unread: null,
      sortEmail: null,
    };
  },
  created() {
    this.loadEmail();
    eventBus.$on("sendStatus", this.changeStatus);
    eventBus.$on("deleteEmail", this.deleteEmail);
  },
  methods: {
    loadEmail() {
      emailService.query().then((emails) => {
        this.emails = emails;
        this.unread = emails.filter((email) => email.isRead === false).length;
      });
    },
    changeStatus(status) {
  
      emailService.getById(status.id).then((email) => {
        if(status.changeRead) email.isRead = !email.isRead;
        if(status.changeStar) email.isStared = !email.isStared;
        emailService.save(email).then(() => {
          this.loadEmail();
        });
      });
    },
    setFilter(filter) {
      this.filterBy = filter;
    },
    setSearchKey(key) {
      this.searchKey = key;
    },
    deleteEmail(id) {
      emailService.remove(id).then(() => {
        this.loadEmail();
      });
    },
    searchWords(words) {
      return this.emails.filter((email) => {
        var key = words.toLowerCase();
        var found = false;
        for (const value in email) {
          const val = "" + email[value];
          if (val.toLowerCase().includes(key)) found = true;
        }
        return found;
      });
    },
    setSort(val) {
      this.sortEmail = val;
    },
    sortBy(emails) {
      switch (this.sortEmail) {
        case "alpha asc":
          return emails.sort((a, b) => {
            if (a.subject < b.subject) return -1;
            if (a.subject > b.subject) return 1;
            return 0;
          });
        case "alpha desc":
          return emails.sort((a, b) => {
            if (a.subject > b.subject) return -1;
            if (a.subject < b.subject) return 1;
            return 0;
          });
        case "old forward":
          return emails.sort((a, b) => {
            if (a.sentAt < b.sentAt) return -1;
            if (a.sentAt > b.sentAt) return 1;
            return 0;
          });
        case " new forward":
        default:
          return emails.sort((a, b) => {
            if (a.sentAt > b.sentAt) return -1;
            if (a.sentAt < b.sentAt) return 1;
            return 0;
          });
      }
    },
  },
  computed: {
    emailsToShow() {
      if (!this.emails) return;

      var emailsToShow = null;
      if (this.searchKey) {
        emailsToShow = this.searchWords(this.searchKey);
      } else {
        switch (this.filterBy) {
          case "sent":
            console.log("switch sent");
            emailsToShow = this.emails.filter(
              (email) => email.from === "team2@email.com"
            );
            break;
          case "unread":
            console.log("switch unread");
            emailsToShow = this.emails.filter(
              (email) => email.isRead === false
            );
            break;
          default:
          case "all":
            console.log("switch all");
            emailsToShow = this.emails.filter(
              (email) => email.from !== "team2@email.com"
            );
            break;
        }
      }
      return this.sortBy(emailsToShow);
    },
  },
  destroyed() {},
  watch: {
    filterBy: function (newVal, oldVal) {
      this.prevFilterBy = oldVal;
    },
  },
};
