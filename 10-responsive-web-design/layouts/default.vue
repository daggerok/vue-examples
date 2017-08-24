<template>
  <section class="container">
    <links></links>
    <nuxt/>
  </section>
</template>

<script>
  import Links from '../components/Links.vue';

  export default {
    components: {
      Links,
    }
  };
</script>

<style>
  @import "../node_modules/font-awesome/css/font-awesome.min.css";
</style>
