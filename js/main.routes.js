import home from "../pages/home.cmp.js";
import about from "../pages/about.cmp.js";
const routes = [
  {
    path: "/",
    component: home,
  },
  {
    path: "/about",
    component: about,
  },
];

export const router = new VueRouter({ routes });
