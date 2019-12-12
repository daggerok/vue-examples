
(function main() {
  new Vue({
    el: '#app',
    data: function _data() {
      return {
        counter: 0,
      };
    },
    methods: {
      increment: function _increment() {
        this.counter++;
      },
    },
  });
})();
