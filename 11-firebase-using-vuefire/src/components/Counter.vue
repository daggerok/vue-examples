<template>
  <div id="app">
    <h3>Counter App</h3>
    <p>{{ counter }}</p>
    <button @click="decrementCounterAction"> - </button>
    <button @click="incrementCounterAction"> + </button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'counter',
    computed: mapGetters([
      'counter',
    ]),
    methods: mapActions([
      'decrementCounterAction',
      'incrementCounterAction',
    ]),
  };
</script>

<style scoped=""></style>
