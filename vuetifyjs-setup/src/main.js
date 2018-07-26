import './vendor';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './vuex/store';

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
