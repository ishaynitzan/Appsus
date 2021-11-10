export default {
  components: {},
  props: [],
  template: `
    <section class="filter">
        <select v-model="filterBy" name="filterKey">
            <option selected>Name</option>
            <option>Price</option>
        </select>
        
        <input v-model="filterVal" @input="filter"/>
        <button @click="filter" class="filter-btn">search</button>
    </section>
    `,
  data() {
    return {
      filterBy: "name",
      filterVal: null,
    };
  },
  created() {},
  methods: {
    filter() {
      this.$emit("filtered", {
        filterBy: this.filterBy,
        filterVal: this.filterVal,
      });
    },
  },
  computed: {},
  destroyed() {},
};

