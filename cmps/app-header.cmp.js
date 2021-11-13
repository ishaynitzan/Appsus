import { router }  from "../js/main.routes.js";


export default {
  components: {},
  router,
  props: [],
  template: `
    <header>
      <div class="pass">
        </div>
        <nav class="flex space-evenly align-center">
        <h1>Appsus</h1>
        <router-link class="link-btn" to="/">home</router-link> 
        <router-link class="link-btn" to="/email">Email</router-link> 
        <router-link class="link-btn" to="/notes">Notes</router-link> 
        <router-link class="link-btn" to="/about">about</router-link> 
        <div>
          ⌬
        </div>
      </nav>
    </header>
    `,
};
