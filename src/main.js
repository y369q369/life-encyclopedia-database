import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入Axios
import Axios from "axios";
Vue.prototype.Axios = Axios

new Vue({
  render: h => h(App),
}).$mount('#app')
