<template>
  <section class="container">
    <heading></heading>
    <nuxt/>
  </section>
</template>

<script>
  import Heading from '../components/Heading.vue';

  export default {
    components: {
      Heading,
    }
  };
</script>

<style>
  @import "../node_modules/font-awesome/css/font-awesome.min.css";
</style>
