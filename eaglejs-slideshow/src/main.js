import Vue from 'vue';
import App from './App.vue';

import Eagle from 'eagle.js';
import 'animate.css';
Vue.use(Eagle);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
