import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/realisations/chemins-de-vie",
    name: "chemins-de-vie",
    component: () =>
      import(
        /* webpackChunkName: "chemins-de-vie" */ "../views/realisations/chemins-de-vie.vue"
      ),
  },
  {
    path: "/realisations/bracelets-therapeutiques",
    name: "bracelets-therapeutiques",
    component: () =>
      import(
        /* webpackChunkName: "bracelets-therapeutiques" */ "../views/realisations/bracelets-therapeutiques.vue"
      ),
  },
  {
    path: "/realisations/pendules",
    name: "pendules",
    component: () =>
      import(
        /* webpackChunkName: "pendules" */ "../views/realisations/pendules.vue"
      ),
  },
  {
    path: "/realisations/pendentifs-et-colliers",
    name: "pendentifs-et-colliers",
    component: () =>
      import(
        /* webpackChunkName: "pendentifs-et-colliers" */ "../views/realisations/pendentifs-et-colliers.vue"
      ),
  },
  {
    path: "/realisations/druses-et-geodes",
    name: "druses-et-geodes",
    component: () =>
      import(
        /* webpackChunkName: "druses-et-geodes" */ "../views/realisations/druses-et-geodes.vue"
      ),
  },
  {
    path: "/realisations/pierres-roulees",
    name: "pierres-roulees",
    component: () =>
      import(
        /* webpackChunkName: "pierres-roulees" */ "../views/realisations/pierres-roulees.vue"
      ),
  },
  {
    path: "/entretenir-ses-pierres",
    name: "entretenir-ses-pierres",
    component: () =>
      import(
        /* webpackChunkName: "entretenir-ses-pierres" */ "../views/entretenir-ses-pierres.vue"
      ),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/contact.vue"),
  },
  {
    path: "/plan-du-site",
    name: "plan-du-site",
    component: () =>
      import(
        /* webpackChunkName: "plan-du-site" */ "../views/plan-du-site.vue"
      ),
  },
  {
    path: "/mentions-legales",
    name: "mentions-legales",
    component: () =>
      import(
        /* webpackChunkName: "mentions-legales" */ "../views/mentions-legales.vue"
      ),
  },
  {
    path: "/cgu",
    name: "cgu",
    component: () => import(/* webpackChunkName: "cgu" */ "../views/cgu.vue"),
  },
  {
    path: "/politique-de-confidentialite",
    name: "politique-de-confidentialite",
    component: () =>
      import(
        /* webpackChunkName: "politique-de-confidentialite" */ "../views/politique-de-confidentialite.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, SavedPosition) {
    if (to.hash) {
      const id = window.location.href.split("#")[1];
      if (id.length) {
        const element = document.getElementById(id);
        if (element) {
          return {
            top: element.getBoundingClientRect().top + window.pageYOffset - 100,
          };
        }
      }
    } else if (SavedPosition) {
      return SavedPosition;
    }
    return { top: 0 };
  },
  routes,
});

export default router;
