
export default {

    components: {

    },
    props: ["book"],
    template: `
    <li> 
        <img :src="book.thumbnail"/>
        <h4>{{book.title}}</h4>    
        <h4>{{bookPrice}}</h4>    
    </li>
    `,
    data() {
        return {

        }
    },
    created() {

    },
    methods: {

    },
    computed: {
        bookPrice() {
            const price = this.book.listPrice.amount;
            const currency = this.book.listPrice.currencyCode;
            const onSale = this.book.listPrice.onSale;
            var currencyCode = currency === 'ILS' ? "₪" : currency === 'USD' ? '$' : '€'
            return '' + price + currencyCode
        }
    },
    destroyed() {

    }

}