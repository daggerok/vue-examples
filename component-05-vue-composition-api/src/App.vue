<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <ReactiveClicker />
    <router-view/>
  </div>
</template>

<script>
  import ReactiveClicker from '@/components/ReactiveClicker';

  export default {
    components: {
      ReactiveClicker,
    },
  };
</script>

<style>

</style>
