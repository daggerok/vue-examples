<template>
  <nav>
    <ul>
      <li class="current">
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/services">Services</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'links',
  };
</script>

<style>
  .nuxt-link-exact-active {

  }
  .nuxt-link-active {

  }
</style>
