import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

// This imports all the layout components such as <b-container>, <b-row>, <b-col>:
import { LayoutPlugin } from "bootstrap-vue";
Vue.use(LayoutPlugin);

// This imports <b-modal> as well as the v-b-modal directive as a plugin:
import { ModalPlugin } from "bootstrap-vue";
Vue.use(ModalPlugin);

// This imports <b-card> along with all the <b-card-*> sub-components as a plugin:
import { CardPlugin } from "bootstrap-vue";
Vue.use(CardPlugin);

// This imports directive v-b-scrollspy as a plugin:
import { VBScrollspyPlugin } from "bootstrap-vue";
Vue.use(VBScrollspyPlugin);

// This imports the dropdown and table plugins
import { DropdownPlugin, TablePlugin } from "bootstrap-vue";
Vue.use(DropdownPlugin);
Vue.use(TablePlugin);

/* window.$ = window.jQuery = require("jquery"); */
// https://ubiqum.socraticarts.com/mc/poa?productID=7185&taskID=3135

/* import { Jquery } from "jquery";
Vue.use(Jquery);

import { JqueryColorbox } from "jquery-colorbox";
Vue.use(JqueryColorbox); */

Vue.config.productionTip = false;

// always at the bottom
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
