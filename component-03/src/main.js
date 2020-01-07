import './webfontloader.ts';
import Vue from 'vue';
import ClickerCounter from './ClickerCounter.vue';

new Vue({ render: createElement => createElement(ClickerCounter) })
  .$mount('#app');
