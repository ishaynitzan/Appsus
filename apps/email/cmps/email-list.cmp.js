import mailPreview from "./mail-preview.cmp.js";
export default {
  components: {  
    mailPreview,
  },
  props: [],
  template: `
    <section class="email-list"> 
      <ul>
      <li v-for="num in 5">
       <mail-preview/>
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
