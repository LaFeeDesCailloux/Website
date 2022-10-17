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
        /* webpackChunkName: "chemins-de-vie" */ "../views/realisations/cheminsDeVie.vue"
      ),
  },
  {
    path: "/realisations/bracelets-therapeutiques",
    name: "bracelets-therapeutiques",
    component: () =>
      import(
        /* webpackChunkName: "bracelets-therapeutiques" */ "../views/realisations/braceletsTherapeutiques.vue"
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
        /* webpackChunkName: "pendentifs-et-colliers" */ "../views/realisations/pendentifsEtColliers.vue"
      ),
  },
  {
    path: "/realisations/druses-et-geodes",
    name: "druses-et-geodes",
    component: () =>
      import(
        /* webpackChunkName: "druses-et-geodes" */ "../views/realisations/drusesEtGeodes.vue"
      ),
  },
  {
    path: "/realisations/pierres-roulees",
    name: "pierres-roulees",
    component: () =>
      import(
        /* webpackChunkName: "pierres-roulees" */ "../views/realisations/pierresRoulees.vue"
      ),
  },
  {
    path: "/entretenir-ses-pierres",
    name: "entretenir-ses-pierres",
    component: () =>
      import(
        /* webpackChunkName: "entretenir-ses-pierres" */ "../views/entretenirSesPierres.vue"
      ),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/contact.vue"),
  },
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
