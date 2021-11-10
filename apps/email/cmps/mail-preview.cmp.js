import emailDetails from "../pages/email-details.js";
import longText from "../../../cmps/long-text.cmp.js";

export default {
  components: {
    emailDetails,
    longText,
  },
  props: ["email"],
  template: `
      <section class="mail-prev">  
      <table>
          <thead></thead>
          <tbody>
          <tr @click="openDetails(email)">
            <th><div class="fa fa-star-o"></div></th>
            <th>{{email.subject}}<th/>
            <th><long-text :txt="email.body" :num="5"/></th> 
            <th><div v-bind:class="[email.isRead ? 'fa fa-envelope-open-o' : 'fa fa-envelope']"></div></th> 
            <th>{{formatted_date(email.sentAt)}}</th> 
          </tr>    
          </tbody>
        </table>    
      </section>
      `,
  data() {
    return {
      txt: "We noticed a new sign in to your Dropbox",
    };
  },
  created() {},
  methods: {
    openDetails(email){

    },
    formatted_date(date) {
      var result = "";
      var d = new Date(date);
      result +=
        d.getDate() +
        "/" +
        (d.getMonth() + 1);
      return result;
    },
  },
  computed: {},
  destroyed() {},
  watch: {},
};
