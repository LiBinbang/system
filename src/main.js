import Vue from 'vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)

Vue.use(ElementUI);

Vue.config.productionTip = false

var vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default vue
