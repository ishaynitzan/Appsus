import { router }  from "../js/main.routes.js";


export default {
  components: {},
  router,
  props: [],
  template: `
    <header>
      <h1>hallo appsus</h1>
      <nav>
        <router-link to="/">home</router-link> 
        <router-link to="/about">about</router-link> 
        <router-link to="/email">Email</router-link> 
      </nav>
      <div>
        ⌬
      </div>
    </header>
    `,
};
