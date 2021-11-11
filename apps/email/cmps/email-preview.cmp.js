import emailDetails from "../pages/email-details.js";
import longText from "../../../cmps/long-text.cmp.js";
import { eventBus } from "../../../js/services/event-bus.service.js";

export default {
  components: {
    emailDetails,
    longText,
  },
  props: ["email"],
  template: `
      <section class="mail-prev">  
      <email-details :email="email" v-if="isDetailsShow" @close="isDetailsShow = !isDetailsShow "/>
      <table  v-else>
          <thead></thead>
          <tbody>
          <tr @click="openDetails">
            <th><div class="fa fa-star-o"></div></th>
            <th>{{email.subject}}<th/>
            <th><long-text :txt="email.body" :num="5"/></th> 
            <th><div @click.stop.prev="changeOpenMail" :class="[isRead ? 'fa fa-envelope-open-o' : 'fa fa-envelope']"></div></th> 
            <th>{{formatted_date(email.sentAt)}}</th> 
          </tr>    
          </tbody>
        </table>  
      </section>
      `,
  data() {
    return {
      isDetailsShow: null,
      isRead: this.email.isRead,
    };
  },
  created() {
    eventBus.$on(`changeOpenMail-${this.email.id}`, this.changeStatus);
  },
  methods: {
    openDetails(email) {
      this.isDetailsShow = true;
    },
    changeOpenMail() {
      eventBus.$emit("changeOpenMail", this.email.id);
    },
    changeStatus(val) {
      this.isRead = val;
    },
    formatted_date(date) {
      var result = "";
      var d = new Date(date);
      result += d.getDate() + "/" + (d.getMonth() + 1);
      return result;
    },
  },
  computed: {
  },
  destroyed() {},
  watch: {},
};
