export default {
  components: {},
  props: [],
  template: `
      <section class='folder-list'>  
        <ul>
          <li><button :class="{active: 'new'=== active}" class="new-mail email-folder-btn" @click="showFolder('new')">New Mail</button></li>
          <li><button :class="{active: 'inbox'=== active}" class="email-folder-btn" @click="showFolder('inbox')">Inbox</button></li>
          <li><button :class="{active: 'starred'=== active}" class="email-folder-btn" @click="showFolder('starred')">Starred</button></li>
          <li><button :class="{active: 'sent'=== active}" class="email-folder-btn" @click="showFolder('sent')">Sent</button></li>
          <li><button :class="{active: 'drafts'=== active}" class="email-folder-btn" @click="showFolder('drafts')">Drafts</button></li>
          <li><button :class="{active: 'all'=== active}" class="email-folder-btn" @click="showFolder('all')">All Mail</button></li>
          <li><button :class="{active: 'garbage'=== active}" class="email-folder-btn" @click="showFolder('garbage')">Garbage</button></li>
        </ul>
      </section>
      `,
  data() {
    return {
      active : 'all'
    };
  },
  created() {},
  methods: {
    showFolder(filter){
      this.active = filter;
      this.$emit("filterBy", filter)
    },
  },
  computed: {},
  destroyed() {},
  watch: {},
};
