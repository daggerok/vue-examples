<template>
  <button @click="this.increment">reactive: {{ state.counter }}</button>
</template>

<script>
  import { reactive } from '@vue/composition-api';
  export default {
    name: 'Clicker',
    setup() {
      const state = reactive({
        counter: 0,
      });
      const increment = () => state.counter += 1;
      return {
        state,
        increment,
      };
    },
  };
</script>

<style scoped>

</style>
