import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'

Vue.config.productionTip = false

// antd
import './plugins/antd'
// swiper
import './plugins/swiper'
// im
import  "./plugins/im"
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
