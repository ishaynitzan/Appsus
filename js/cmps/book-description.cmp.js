
export default {
    components: {

    },
    props: ['description'],
    template: `
    <div>
        <p>{{showTxt}}<span v-if="description.length < 100 && !isMore" > ...</span></p>    
        <button v-if="description.length < 100" @click.prev.stop="showMore">More</button> 
        
    </div>
    `,
    data() {
        return {
            isMore: false,
        }
    },
    created() {

    },
    methods: {
        showMore() {
            this.isMore = !this.isMore;
        }
    },
    computed: {
        showTxt() {
            const txt = this.description
            var shortTxt = this.description.split(/\s/).slice(0, 10).join(" ");
            if (this.isMore) {
                return txt;
            } else {
                return shortTxt;
            }
        }
    },
    destroyed() {

    }

}