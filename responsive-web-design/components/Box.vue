<template>
  <div class="box">
    <i v-if="icon" :class="['fa', icon, 'fa-5x']"></i>
    <h3>{{ header }}</h3>
    <p>{{ payload }}</p>
  </div>
</template>

<script>
  export default {
    props: [
      'icon',
      'header',
      'payload',
    ],
    name: 'box',
  };
</script>

<style scoped=""></style>
