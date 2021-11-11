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
      <section class="mail-preview">  
      <email-details :email="email" v-if="isDetailsShow" @close="isDetailsShow = !isDetailsShow "/>
      <table  v-else>
          <thead></thead>
          <tbody>
          <tr @click="openDetails" class="flex">
            <th class="flex justify-center"><div class="fa fa-star-o"></div></th>
            <th class="flex align-center subject"><div>{{email.subject}}</div><th/>
            <th class="flex grow-3 align-center">
            <long-text :txt="email.body" :num="7"/>
            </th> 
            <th class="flex align-center"><div @click.stop.prev="changeOpenMail" :class="[isRead ? 'fa fa-envelope-open-o' : 'fa fa-envelope']"></div></th> 
            <th class="flex align-center">{{formatted_date(email.sentAt)}}</th> 
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
