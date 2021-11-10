import emailFilter from "../cmps/email-filter.cmp.js";
import folderList from "../cmps/email-folder-list.cmp.js";
import listEmail from "../cmps/email-list.cmp.js";
import mailPreview from "../cmps/mail-preview.cmp.js";
import compose from "../pages/email-compose.js";

export default {
  components: {
    emailFilter,
    folderList,
    listEmail,
    mailPreview,
    compose,
  },
  props: [],
  template: `
    <section>
    <email-filter/>
    <folder-list/>
    <list-email/>
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

