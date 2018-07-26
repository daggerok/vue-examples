<template>
  <div class="links">
    <nuxt-link to="/">
      <div class="button--grey">Home</div>
    </nuxt-link>
    <nuxt-link to="/services">
      <div class="button--grey">Services</div>
    </nuxt-link>
    <nuxt-link to="/about">
      <div class="button--grey">About</div>
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    name: 'links',
  };
</script>

<style scoped="">
  ul {
    display: inline;
    list-style-type: none;
    margin: 0;
    padding: 0;
    min-width: 60%;
  }
</style>
