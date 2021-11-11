import { router }  from "../js/main.routes.js";


export default {
  components: {},
  router,
  props: [],
  template: `
    <header>
      <h1>Appsus</h1>
      <nav>
        <router-link class="link-btn" to="/">home</router-link> 
        <router-link class="link-btn" to="/about">about</router-link> 
        <router-link class="link-btn" to="/email">Email</router-link> 
        <router-link class="link-btn" to="/notes">Notes</router-link> 
      </nav>
      <div>
        ⌬
      </div>
    </header>
    `,
};
