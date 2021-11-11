import longText from "../../../cmps/long-text.cmp.js";
import { eventBus } from "../../../js/services/event-bus.service.js";

export default {
  components: {
    longText,
  },
  props: ["email"],
  template: `
  <section class="mail-preview">  
    <table v-if="!isPeak">
      <thead></thead>
      <tbody>
        <tr @click="changePeak" class="flex" :class="{'open-mail' : isRead}">
          <th class="flex justify-center"><div @click.stop.prev="addStar(email.id)" :class="[isStared ? 'fa fa-star' : 'fa fa-star-o']" title="Stared"></div></th>
          <th class="flex align-center subject"><div>{{email.subject}}</div><th/>
          <th class="flex grow-3 align-center">
            <long-text :txt="email.body" :num="7"/>
          </th> 
          <th class="flex align-center"><div @click.stop.prev="changeOpenMail" :class="[isRead ? 'fa fa-envelope-open-o' : 'fa fa-envelope']" title="Un/Read"></div></th> 
          <th class="flex align-center">{{formatted_date(email.sentAt)}}</th> 
        </tr>    
      </tbody>
    </table> 
    <section v-else class="email-peak flex column"> 
        <header class="flex space-between">
          <div></div>
          <div>
            <div @click.stop.prev="changePeak"  class="fa fa-window-minimize" title="Minimize"></div>
            <div @click="openDetails(email.id)" class="fa fa-expand" title="Expand"></div>
          </div>
        </header>
        <div>From: <span>{{email.from}}</span></div>
        <div>Topic: <span>{{email.subject}}</span></div>
        <hr>
        <p>{{email.body}}</p>
        <hr>
        <nav class="flex">
          <div class="fa fa-reply" title="Reply"></div>
          <div @click="deleteEmail(email.id)" class="fa fa fa-trash-o" title="Delete"></div>
        </nav>
    </section>
  </section>
      `,
  data() {
    return {
      isPeak: null,
      isRead: this.email.isRead,
      isStared: false ,
    };
  },
  created() {
    eventBus.$on(`changeOpenMail-${this.email.id}`, this.changeStatus);
  },
  methods: {
    changePeak() {
      this.isPeak = !this.isPeak;
      if(this.isPeak && !this.isRead){ 
        this.changeOpenMail();
      } 
    },
    changeOpenMail() {
      eventBus.$emit("changeOpenMail", this.email.id);
    },
    changeStatus(val) {
      this.isRead = val;
    },
    formatted_date(val) {
      var result = "";
      var date = "" + new Date(val);
      date = date.split(" ");
      result += date[1] + "/" + date[2];
      return result;
    },
    deleteEmail(id) {
      if (confirm("Do you sure?")) {
        this.$emit("close");
        eventBus.$emit("deleteEmail", id);
      }
    },
    openDetails(id) {
      this.$emit("openDetails");
      this.$router.push("/email/details/" + `${id}`).catch(() => {});
    },
    addStar(id) {
      this.isStared = !this.isStared;
    },
  },
  computed: {},
  destroyed() {},
  watch: {},
};
