import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pageTitle from "./mixins/pageTitle";
import blobGenerator from "@/mixins/blobGenerator";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faCaretRight,
  faEnvelope,
  faInfo,
  faPhone,
  faSortDown,
  faSpinner,
  faStar,
  faUpLong,
  faWandMagicSparkles,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke } from "@fortawesome/free-regular-svg-icons";

library.add(
  faInstagram,
  faPhone,
  faEnvelope,
  faStar,
  faStarHalfStroke,
  faWandMagicSparkles,
  faSortDown,
  faCaretRight,
  faInfo,
  faUpLong,
  faBars,
  faXmark,
  faSpinner
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mixin(pageTitle)
  .mixin(blobGenerator)
  .mount("#app");
