import { emailService } from "../services/email.service.js";
import emailFilter from "../cmps/email-filter.cmp.js";
import folderList from "../cmps/email-folder-list.cmp.js";
import emailList from "../cmps/email-list.cmp.js";
import mailPreview from "../cmps/mail-preview.cmp.js";
import compose from "../pages/email-compose.js";

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
      <folder-list @selectFolder="setFolder" class="main-container"/>
      <section class="email-body main-container flex column">
        <email-filter/>
        <compose v-if="selectedFolder === 'new'"/>
        <email-list v-else-if="selectedFolder ==='all'" :emailsToShow="emailsToShow"/>
      </section>
    </section>
    `,
  data() {
    return {
      email: null,
      selectedFolder: "all",
    };
  },
  created() {
    this.query();
  },
  methods: {
    query() {
      emailService.query().then((emails) => {
        this.email = emails;
      });
    },
    setFolder(val) {
      this.selectedFolder = val;
      console.log(val);
    },
  },
  computed: {
    emailsToShow() {
      return this.email;
    },
  },
  destroyed() {},
  watch: {},
};
