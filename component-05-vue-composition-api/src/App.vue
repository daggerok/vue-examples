<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <Clicker />
    <router-view/>
  </div>
</template>

<script>
  import Clicker from '@/components/Clicker';

  export default {
    components: {
      Clicker,
    },
  };
</script>

<style>

</style>
