import home from "../pages/home.cmp.js";
import about from "../pages/about.cmp.js";
import email from "../apps/email/pages/email-app.js"

const routes = [
  {
    path: "/",
    component: home,
  },
  {
    path: "/about",
    component: about,
  },
  {
    path: "/email",
    component: email,
  },
];

export const router = new VueRouter({ routes });
