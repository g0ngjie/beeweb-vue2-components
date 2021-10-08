import Vue from 'vue'
import App from './App.vue'

import plugin from '../packages/index'

Vue.use(Element, { size: 'mini' });
Vue.use(plugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
