import emailPreview from "./email-preview.cmp.js";
export default {
  components: {  
    emailPreview,
  },
  props: ['emailsToShow'],
  template: `
    <section class="email-list"> 
      <ul>
      <li v-for="email in emailsToShow" :key="email.id">
       <email-preview :email="email"/>
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
