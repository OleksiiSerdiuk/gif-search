import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BaseButton from '@/components/base/BaseButton.vue';

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.component('base-button', BaseButton);

new Vue({
  render: h => h(App),
}).$mount('#app')
