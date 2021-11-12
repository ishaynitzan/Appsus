export default {
  components: {},
  props: ["txt", "num"],
  template: `
    <div>
        <p>{{showTxt}}<span v-if="words > this.num" >...</span></p>            
    </div>
    `,
    data(){
      return{
        words : this.txt ?this.txt.split(/\s+/).length:''
      }
    },
  computed: {
    showTxt() {
      if(!this.txt) return '';
      return this.txt.split(/\s+/).slice(0, this.num).join(" ");
    },
  },
};

