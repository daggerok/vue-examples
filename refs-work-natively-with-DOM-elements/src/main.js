import 'hammerjs/hammer';
import 'jquery/dist/jquery';
import 'materialize-css/dist/js/materialize';
import 'materialize-css/dist/css/materialize.css';
import Vue from 'vue';
import RefsApp from './RefsApp';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  components: { RefsApp },
  template: `<RefsApp/>`,
});
