import mailPreview from "./mail-preview.cmp.js";
export default {
  components: {  
    mailPreview,
  },
  props: ['emailsToShow'],
  template: `
    <section class="email-list"> 
      <ul>
      <li v-for="email in emailsToShow">
       <mail-preview :email="email"/>
      </li>
      </ul> 
    </section>
    `,
  data() {
    return {};
  },
  created() {  
  },
  methods: {
  },
  computed: {
  },
  destroyed() {},
  watch :{
  }
};
