<template>
  <div id="my-first-slide-show">
    <div class="eg-slideshow">
      <slide>
        <h3>Hello hello!</h3>
        ololo trololo!
      </slide>
      <slide enter="bounceInRight" eave="adeOut">
        <h3>Second slide!</h3>
        <p>Come on, baby, light my fire!</p>
      </slide>
      <slide enter="fadeIn">
        <h3>Do you want some?</h3>
        <p>Yes. All we need is coffee, code and a hugs</p>
      </slide>
    </div>
  </div>
</template>

<script>
  import { Slideshow } from 'eagle.js';

  export default {
    name: 'App',
    mixins: [ Slideshow ],
  };
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
