<template>
  <div class="container">
    <head class="header">
      <h3>{{ name }}</h3>
    </head>
    <input ref="inp" placeholder="click on button"/>
    <button @click="focusInput">focus input</button>
  </div>
</template>

<script>
  export default {
    name: 'RefsApp',
    data() {
      return {
        name: 'Working with DOM elements natively'
      };
    },
    methods: {
      focusInput() {
        this.$refs.inp.focus();
      }
    },
  };
</script>

<style>
  body {
    padding: 0.5%;
  }
</style>
