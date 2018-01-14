import Vue from 'vue/dist/vue';

new Vue({
  el: '#app',
  data() { return { name: 'Parcel' }; },
  template: `<p>hey, {{ name }}!</p>`,
});
