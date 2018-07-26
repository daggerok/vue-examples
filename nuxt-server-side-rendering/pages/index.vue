<template>
  <section>
    <links></links>
    <div>
      <logo/>
      <h1 class="title">
        nuxt-server-side-rendering
      </h1>
      <h2 class="subtitle">
        Nuxt.js server-side rendenring with Vue.js
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue';
  import Links from '../components/Links.vue';

  export default {
    name: 'home',
    components: {
      Logo,
      Links,
    }
  };
</script>

<style scoped=""></style>
