<template>
  <div>
    <showcase></showcase>
    <newsletter></newsletter>
    <boxes></boxes>
  </div>
</template>

<script>
  import Showcase from '../components/Showcase.vue';
  import Newsletter from '../components/Newsletter.vue';
  import Boxes from '../components/Boxes.vue';
  import Hanging from '../components/Hanging.vue';

  export default {
    name: 'home',
    components: {
      Showcase,
      Newsletter,
      Boxes,
      Hanging,
    },
  };
</script>

<style scoped=""></style>
