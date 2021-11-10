
import appHeader from "./cmps/app-header.cmp.js";
import booksApp from "./pages/books-app.js";
import appFooter from "./cmps/app-footer.cmp.js";
import { router } from "./routes.js";
import appMsg from "./cmps/app-msg.cmp.js";

console.log('hi');

const options = {
    el: '#app',
    router,
    template: `
    <section>
        <app-header/>
        <app-msg />
        <router-view />
        <app-footer/>
    </section>
    `,
    components: {
        appFooter,
        booksApp,
        appHeader,
        appMsg
    }
}

new Vue(options);