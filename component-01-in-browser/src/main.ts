import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: [
      // 'Roboto:300,400,500,600,700',
      'Roboto:400,100,‌​100italic,300,300ita‌​lic,400italic,500,50‌​0italic,700,700itali‌​c,900italic,900',
    ],
  },
});

import Vue from 'vue/dist/vue.js';

Vue.component('clicker', {
  template: `
    <button @click="increment">clicked {{ counter }} times</button>
  `,
  data() {
    return { counter: 0 };
  },
  methods: {
    increment() {
      this.counter += 1;
    },
  },
});

new Vue({
  el: '#app',
});
