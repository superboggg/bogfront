import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueScrollTo from 'vue-scrollto'
// import './plugins/element.js'

Vue.config.productionTip = false

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: 0,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
