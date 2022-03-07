import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/scss/common.scss";
import { VueMasonryPlugin } from "vue-masonry";
import "slick-carousel/slick/slick.css";

import Meta from "vue-meta";
Vue.use(Meta, {
  attribute: "data-vue-meta",
});

Vue.use(VueMasonryPlugin);

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSun,
  faMoon,
  faCloud,
  faAngleUp,
  faAngleLeft,
  faAngleRight,
  faXmark,
  faPlus,
  faGripVertical,
  faList,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faSun,
  faMoon,
  faCloud,
  faAngleUp,
  faAngleLeft,
  faAngleRight,
  faXmark,
  faPlus,
  faGripVertical,
  faList,
  faEnvelope
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
