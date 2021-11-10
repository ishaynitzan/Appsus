export default {
  components: {},
  props: ["txt", "num"],
  template: `
    <div>
        <p>{{showTxt}}<span v-if="txt.length < 100" >...</span></p>            
    </div>
    `,
  computed: {
    showTxt() {
      return this.txt.split(/\s+/).slice(0, this.num).join(" ");
    },
  },
};
