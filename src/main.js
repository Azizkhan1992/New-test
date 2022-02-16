import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router'
import axios from './plugins/axios'
import 'vuex'
import store from './store/store.js'
import 'vuetify'
import vuetify from '@/plugins/vuetify'
import './plugins'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  axios,
  store,
  render: h => h(App),
}).$mount('#app')
