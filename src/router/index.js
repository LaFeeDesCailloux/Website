import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/realisations/pendules",
    name: "pendules",
    component: () =>
      import(
        /* webpackChunkName: "pendules" */ "../views/realisations/Pendules.vue"
      ),
  },
  /*{
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/!* webpackChunkName: "about" *!/ "../views/AboutView.vue"),
  },*/
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, SavedPosition) {
    if (to.hash) {
      let id = window.location.href.split("#")[1];
      if (id.length) {
        let yOffset = -90;
        let element = document.getElementById(id);
        if (element) {
          let y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          return { top: y };
        }
      }
    } else if (SavedPosition) {
      return SavedPosition;
    } else {
      return { top: 0 };
    }
  },
  routes,
});

export default router;
