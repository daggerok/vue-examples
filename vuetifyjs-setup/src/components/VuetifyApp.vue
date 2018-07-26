<template>
  <div id="vuetify-app">
    <h3>Vuetify</h3>
    <p>TODO...</p>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Vuetify from 'vuetify';

  Vue.use(Vuetify);

  export default {
    name: 'vuetify-app',
  };
</script>

<style scoped="" lang="stylus">
  @import "~material-design-icons/iconfont/material-icons.css";
  /*@import "~vuetify/dist/vuetify.min.css";*/
  @import "~vuetify/src/stylus/main.styl";
</style>
