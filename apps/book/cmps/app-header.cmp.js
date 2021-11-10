export default {
  components: {},
  props: [],
  template: `
    <header>
        <div>
          <img class="book-move1" src="./imgs/bookLogo-red.png"/>
          <img class="book-move2" src="./imgs/bookLogo.png"/>
        </div>
        <h6>← Click & Hold </h6>
        <h1> Miss Book </h1>
        <nav>
            <router-link to="/" active-class="">Home Page</router-link> 
            <router-link to="/bookApp" active-class="">Books</router-link>
            <router-link to="/about" active-class="">about</router-link> 
        </nav>
    </header>
    `,
};
