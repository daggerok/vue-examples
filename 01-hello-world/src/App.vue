<template>
  <div id="app">
    <p>this is from used component on page:</p>
    <home></home>
    <p>this is from matches route:</p>
    <router-view></router-view>
  </div>
</template>

<script>
  import Home from './components/Home.vue';
  export default {
    name: 'app',
    components: {
      Home
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
