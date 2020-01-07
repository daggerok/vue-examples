<template>
  <div>
    <button @click="increment">
      <Other ></Other>
      clicked {{ counter }} times
    </button>
  </div>
</template>

<script>
  import Other from './Other';

  export default {
    name: 'ClickerCounter',
    components: {
      Other,
    },
    data() {
      return { counter: 0 };
    },
    methods: {
      increment() {
        this.counter += 1;
      },
    },
  };
</script>

<style scoped>
  button {
    color: green;
    padding: 2%;
    margin: 2%;
    font-size: 3em;
  }
</style>
