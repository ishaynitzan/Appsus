
export default {
    components: {  
    },
    props: [],
    template: `
      <section class="folder-list">  
        <ul>
          <li><button :class="{active: 'new'=== active}" class="folder-btn" @click="showFolder('new')" >New Notes</button></li>
          <li><button :class="{active: 'todo'=== active}" class="folder-btn" @click="showFolder('todo')">To Do</button></li>
          <li><button :class="{active: 'starred'=== active}" class="folder-btn" @click="showFolder('starred')">Starred</button></li>
          <li><button :class="{active: 'done'=== active}" class="folder-btn" @click="showFolder('done')">Done</button></li>
          <li><button :class="{active: 'images'=== active}" class="folder-btn" @click="showFolder('images')">Images</button></li>
          <li><button :class="{active: 'all'=== active}" class="folder-btn" @click="showFolder('all')">All</button></li>
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
  