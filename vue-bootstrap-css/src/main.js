import 'babel-polyfill';

import Vue from 'vue';
import App from './app/App';

new Vue({
  el: '#app',
  render: h => h(App)
});
