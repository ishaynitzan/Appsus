import longText from "../../../cmps/long-text.cmp.js";
import { eventBus } from "../../../js/services/event-bus.service.js";

export default {
  components: {
    longText,
  },
  props: ["email"],
  template: `
  <section class="mail-preview" @mouseover="hover=true" @mouseleave="hover=false">  
    <table v-if="!isPeak">
      <thead></thead>
      <tbody>
        <tr @click="changePeak" class="flex" :class="{'open-email' : isRead}">
          <th class="flex align-center"><div @click.stop.prev="sendStatus('changeStar')" :class="[isStared ? 'btn fa fa-star' : 'btn fa fa-star-o']" title="Stared"></div></th>
          <th class="flex align-center subject"><div>{{email.subject}}</div><th/>
          <th class="flex grow-1 align-center preview-body">
            <long-text :txt="email.body" :num="7"/>
          </th> 
          <th class="flex align-center"><div @click.stop.prev="sendStatus('changeRead')" :class="[isRead ? 'btn fa fa-envelope-open-o' : 'btn fa fa-envelope']" title="Un/Read"></div>
            <div v-if="!hover"><div class="btn">{{formatted_date(email.sentAt)}}</div></div>
            <div v-else>
              <div @click.stop.prev="openDetails(email.id)" class="btn fa fa-expand" title="Expand"></div>
              <div @click.stop.prev="deleteEmail(email.id)" class="btn fa fa-trash-o" title="Delete"></div>
            </div>
          </th> 
        </tr>    
      </tbody>
    </table> 
    <section v-else class="email-peak flex column"> 
        <header class="flex space-between">
          <div></div>
          <div>
            <div @click.stop.prev="changePeak"  class="btn fa fa-window-minimize" title="Minimize"></div>
            <div @click="openDetails(email.id)" class="btn fa fa-expand" title="Expand"></div>
          </div>
        </header>
        <main>
          <div>From: <span>{{email.from}}</span></div>
          <hr>
          <div>Topic: <span>{{email.subject}}</span></div>
          <hr>
          <p>{{email.body}}</p>
          <hr>
        </main>
        <nav class="flex">
          <div class="btn fa fa-reply" title="Reply"></div>
          <div @click="deleteEmail(email.id)" class="btn fa fa-trash-o" title="Delete"></div>
        </nav>
    </section>
  </section>
      `,
  data() {
    return {
      hover: null,
      isPeak: null,
      isRead: this.email.isRead,
      isStared: this.email.isStared,
    };
  },
  created() {},
  methods: {
    changePeak() {
      this.isPeak = !this.isPeak;
      if (!this.isRead) {
        this.sendStatus("changeRead");
      }
    },
    sendStatus(status) {
      var changeRead = false;
      var changeStar = false;
      if (status === "changeRead") {
        this.isRead = !this.isRead;
        changeRead = true;
      }
      if (status === "changeStar") {
        this.isStared = !this.isStared;
        changeStar = true;
      }
      eventBus.$emit("sendStatus", {
        id: this.email.id,
        changeRead,
        changeStar,
      });
    },
    formatted_date(val) {
      var result = "";
      var date = "" + new Date(val);
      date = date.split(" ");
      result += date[1] + "/" + date[2];
      return result;
    },
    deleteEmail(id) {
      if (confirm("are you sure?")) {
        this.$emit("close");
        eventBus.$emit("deleteEmail", id);
      }
    },
    openDetails(id) {
      this.$emit("openDetails");
      this.$router.push("/email/details/" + `${id}`).catch(() => {});
    },
  },
  computed: {},
  destroyed() {},
  watch: {},
};
