
export default {
    components: {  
    },
    props: [],
    template: `
      <section>  
        <h1>Create a New Note</h1>
            <div class="note-adder">
                <textarea v-model="text" placeholder="Edit me"></textarea>
            </div>
        <p>New Note: {{ text }}</p>
        <button @click="add">save</button>
      </section>
      `,
    data() {
      return {
          text: this.text

      };
    },
    created() {  
    },
    methods: {
        add(){
            console.log('added', this.text);
        }
    },
    computed: {
    },
    destroyed() {},
    watch :{
    }
  };
  