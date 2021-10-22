import Vue from "vue";
import App from "./App.vue";

import plugin, { Confetti } from "../packages/index";

Vue.prototype.$confetti = new Confetti();
Vue.use(plugin);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
