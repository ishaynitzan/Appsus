import appHeader from "../cmps/app-header.cmp.js";
import appFooter from "../cmps/app-footer.cmp.js";
import { router } from "./main.routes.js";

const appsus = {
  el: "#appsus",
  router,
  template: `
    <section>
    <app-header class="main-header"/>
    <router-view class="main-container"/>
    <app-footer class="main-footer"/>
    </section>
    `,
  components: {
    appHeader,
    appFooter,
  },
};

new Vue(appsus);
