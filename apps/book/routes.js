import landingPage from "./pages/landing-page.cmp.js";
import booksApp from "./pages/books-app.js";
import aboutPage from "./pages/about-page.cmp.js";
import reviewPage from "./pages/review-page.cmp.js";

const routes = [
  {
    path: "/",
    component: landingPage,
  },
  {
    path: "/bookApp",
    component: booksApp,
  },
  {
    path: "/about",
    component: aboutPage,
  },
  {
    path: "/bookApp/review/:bookId?",
    component: reviewPage,
  },
];

export const router = new VueRouter({ routes });
