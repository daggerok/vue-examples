<template>
  <div>
    <h3>using materialize-css (+ jquery)</h3>
    <div class="input-field col s1">
      <i class="material-icons large">sentiment_very_satisfied</i>
    </div>
    <a href="http://materializecss.com" target="_blank">Home Page</a>
  </div>
</template>

<script>
  window.$ = window.jQuery = require('jquery');
  require('materialize-css');

  export default {
    name: 'materialize-css',
    mounted () { // componentDidMount
      // activate material select
      $('select').material_select();
      // hello toast
      Materialize.toast('hi', 1000);
      // activate slidenav for mobile
      $('.button-collapse').sideNav();
    },
  };
</script>

<style scoped="">
  @import '~material-design-icons/iconfont/material-icons.css';
  @import '~materialize-css/dist/css/materialize.min.css';
</style>
