import home from "../pages/home.cmp.js";
import email from "../apps/email/pages/email-app.js"
import notes from "../apps/notes/cmps/notes-app.js"
import about from "../pages/about.cmp.js";
import compose from "../apps/email/pages/email-compose.js";
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
  {
    path: "/email/details/:emailId?",
    component: email,
  },
  {
    path: "/email/compose/:emailId?",
    component: compose,
  },
  {
    path: "/notes",
    component: notes,
  }
];

export const router = new VueRouter({ routes });
