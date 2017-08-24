<template>
  <div id="app">
    <links></links>
    <router-view></router-view>
  </div>
</template>

<script>
  import Links from './components/Links.vue';
  export default {
    name: 'app',
    components: {
      Links,
    },
  }
</script>

<style scoped="">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
/*
  input[type="button"],
  input[type="submit"],
  input[type="reset"],
  input[type="file"]::-webkit-file-upload-button,
  button {
    align-items: flex-start;
    text-align: center;
    cursor: default;
    color: buttontext;
    background-color: buttonface;
    box-sizing: border-box;
    padding: 2px 6px 3px;
    border-width: 2px;
    border-style: outset;
    border-color: buttonface;
    border-image: initial;
  }
  input,
  textarea,
  select,
  button {
    text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    margin: 0em;
    font: 11px system-ui;
  }
  input,
  textarea,
  select,
  button,
  meter,
  progress {
    -webkit-writing-mode: horizontal-tb;
  }
  button {
    -webkit-appearance: button;
  }
*/
</style>
