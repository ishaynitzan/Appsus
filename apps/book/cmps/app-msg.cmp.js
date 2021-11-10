import { eventBus } from "../services/event-bus.service.js";

export default {
  components: {},
  props: [],
  template: `
    <transition name="fade">
        <section v-if="msg" class="message" :class="msg.type">{{msg.txt}}</section>
    </transition>    
    `,
  data() {
    return {
      msg: null,

    };
  },
  created() {
                          val   
    eventBus.$on("msg", this.showMsg);
  },
  methods: {
    showMsg(msg) {    
        this.msg = msg;
      setTimeout(() => {
        this.msg = null;
      }, 3000);
    },
  },
  destroyed() {
    eventBus.$off("showMsg", this.showMsg);
  },
  watch: {},
};
