<template>
  <div>
    <md-toolbar>
      <h1 class="md-title">using vue-material (+ jquery)</h1>
    </md-toolbar>

    <div class="input-field col s1">
      <i class="material-icons large">sentiment_very_satisfied</i>
    </div>

    <div class="main-content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, rerum? Error sunt, aperiam dolores,
        atque expedita molestiae tenetur. Quis eveniet accusamus velit explicabo adipisci reiciendis modi eaque quas,
        officia excepturi.
      </p>
    </div>

    <a href="http://vuematerial.io/" target="_blank">Home Page</a>
  </div>
</template>

<script>
  window.$ = window.jQuery = require('jquery');
  import Vue from 'vue';
  import VueMaterial from 'vue-material';

  Vue.use(VueMaterial);

  // Vue.use(VueMaterial.mdCore); // Required to boot vue material
  // Vue.use(VueMaterial.mdButton);
  // Vue.use(VueMaterial.mdIcon);
  // Vue.use(VueMaterial.mdSidenav);
  // Vue.use(VueMaterial.mdToolbar);

  export default {
    name: 'vue-material',
  };
</script>

<style scoped="">
  @import '~material-design-icons/iconfont/material-icons.css';
  @import '~vue-material/dist/vue-material.css';

  /*@import '~vue-material/dist/components/mdCore/index.css';*/
  /*@import '~vue-material/dist/components/mdButton/index.css';*/
  /*@import '~vue-material/dist/components/mdIcon/index.css';*/
  /*@import '~vue-material/dist/components/mdSidenav/index.css';*/
  /*@import '~vue-material/dist/components/mdToolbar/index.css';*/

  .main-content {
    padding: 16px;
  }
</style>
