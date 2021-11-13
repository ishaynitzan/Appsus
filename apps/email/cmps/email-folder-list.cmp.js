export default {
  components: {},
  props: [],
  template: `
      <section class='folder-list'>  
        <ul>
          <li><button :class="{active: 'new'=== active}" class="compose-folder-btn email-folder-btn" @click="showFolder('new')"><div class="fa fa-plus"> &nbsp</div><span>Compose</span></button></li>
          <li><button :class="{active: 'inbox'=== active}" class="email-folder-btn" @click="showFolder('inbox')">
           <div class="fa fa-inbox"> &nbsp</div>
           <span>Inbox</span></button></li>
          <li><button :class="{active: 'starred'=== active}" class="email-folder-btn" @click="showFolder('starred')"><div class="fa fa-star-o"> &nbsp</div>
          <span>Starred</span></button></li>
          <li><button :class="{active: 'sent'=== active}" class="email-folder-btn" @click="showFolder('sent')"><div class="fa fa-send-o"> &nbsp</div><span>Sent</span></button></li>
          <li><button :class="{active: 'drafts'=== active}" class="email-folder-btn" @click="showFolder('drafts')"><div class="fa fa-file-o"> &nbsp</div><span>Drafts</span></button></li>
          <li><button :class="{active: 'all'=== active}" class="email-folder-btn" @click="showFolder('all')"><div class="fa fa-envelope-o"> &nbsp</div><span>All\r Mail</span></button></li>
          <li><button :class="{active: 'trash'=== active}" class="email-folder-btn" @click="showFolder('trash')"><div class="fa fa-trash-o"> &nbsp</div><span>Garbage</span></button></li>
        </ul>
      </section>
      `,
  data() {
    return {
      active : 'inbox'
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
