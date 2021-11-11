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
        words : this.txt.split(/\s+/).length
      }
    },
  computed: {
    showTxt() {
      return this.txt.split(/\s+/).slice(0, this.num).join(" ");
    },
  },
};
