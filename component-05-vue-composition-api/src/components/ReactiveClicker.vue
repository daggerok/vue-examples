<template>
  <div class="container">
    <div class="item">
      <button @click="this.increment">
        reactive increment
        <span class="bold">{{ state.counter }}</span>
        counter of
        <span class="bold">{{ state.totalClicks }}</span> total clicks
      </button>
    </div>
    <div class="item">
      <button @click="this.decrement">
        reactive decrement
        <span class="bold">{{ state.counter }}</span>
        counter of
        <span class="bold">{{ state.totalClicks }}</span> total clicks
      </button>
    </div>
  </div>
</template>

<script>
  import { reactive } from '@vue/composition-api';
  export default {
    name: 'Clicker',
    setup() {
      const state = reactive({
        counter: 0,
        totalClicks: 0,
      });
      const increment = () => {
        state.counter += 1;
        state.totalClicks += 1;
      };
      const decrement = () => {
        state.counter -= 1;
        state.totalClicks += 1;
      };
      return {
        state,
        increment,
        decrement,
      };
    },
  };
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
  }
  .item {
    margin: auto;
  }
  .item button {
    font-size: 2em;
  }
  .bold {
    font-weight: bold;
  }
</style>
