export default {
  components: {},
  props: [],
  template: `
      <section class='folder-list'>  
        <ul>
          <li><button class="new-mail folder-btn" @click="showFolder('new')">New Mail</button></li>
          <li><button class="folder-btn" @click="showFolder('inbox')">Inbox</button></li>
          <li><button class="folder-btn" @click="showFolder('starred')">Starred</button></li>
          <li><button class="folder-btn" @click="showFolder('sent')">Sent</button></li>
          <li><button class="folder-btn" @click="showFolder('drafts')">Drafts</button></li>
          <li><button class="folder-btn" @click="showFolder('all')">All Mail</button></li>
          <li><button class="folder-btn" @click="showFolder('garbage')">Garbage</button></li>
        </ul>
      </section>
      `,
  data() {
    return {
      isCompose: null,
    };
  },
  created() {},
  methods: {
    showFolder(val){
      this.isCompose = val;
      this.$emit("selectFolder", this.isCompose)
    },
  },
  computed: {},
  destroyed() {},
  watch: {},
};
