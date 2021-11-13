
export default {
    components: {  
    },
    props: [],
    template: `
      <section class="folder-list">  
        <ul>
          <li><button :class="{active: 'textNote'=== active}" class="folder-btn" @click="showFolder('textNote')">Text Notes</button></li>
          <li><button :class="{active: 'linkNote'=== active}" class="folder-btn" @click="showFolder('linkNote')">Links</button></li>
          <li><button :class="{active: 'todoNote'=== active}" class="folder-btn" @click="showFolder('todoNote')">To Do</button></li>
          <li><button :class="{active: 'imageNote'=== active}" class="folder-btn" @click="showFolder('imageNote')">Images</button></li>
          <li><button :class="{active: 'all'=== active}" class="folder-btn" @click="showFolder('all')">All</button></li>
          <li><button :class="{active: 'new'=== active}" class="folder-btn" @click="showFolder('new')" >New Notes</button></li>
          <li><button :class="{active: 'trash'=== active}" class="folder-btn" @click="showFolder('trash')">Garbage</button></li>
        </ul>
      </section>
      `,
    data() {
      return {
        active : 'all'
      };
    },
    created() {  
    },
    methods: {
        showFolder(filter){
            this.active = filter;
            this.$emit("filterBy", filter)
        }
    },
    computed: {
    },
    destroyed() {},
    watch :{
    }
  }
  