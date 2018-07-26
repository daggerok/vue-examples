import Vue from 'vue';
import './infrastructure/vendors';
import router from './infrastructure/router';
import store from './infrastructure/store';
import App from './components/App.vue';

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  el: '#app',
  template: '<App/>',
  components: {
    App,
  }
});
