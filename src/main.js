import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueSplide from "@splidejs/vue-splide";
import titleMixin from "./titleMixin";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faStar,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke } from "@fortawesome/free-regular-svg-icons";

library.add(
  faInstagram,
  faPhone,
  faEnvelope,
  faStar,
  faStarHalfStroke,
  faWandMagicSparkles
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(VueSplide)
  .mixin(titleMixin)
  .mount("#app");
