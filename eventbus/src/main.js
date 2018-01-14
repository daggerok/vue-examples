import 'hammerjs/hammer';
import 'jquery/dist/jquery';
import 'materialize-css/dist/js/materialize';
import 'materialize-css/dist/css/materialize.css';
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ChatApp from './ChatApp';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { ChatApp },
  template: `<ChatApp/>`
});
