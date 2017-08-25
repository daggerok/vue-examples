<template>
  <section id="boxes">
    <div class="container">
      <box v-for="(b, index) in boxes"
           :key="index"
           :icon="b.icon"
           :header="b.header"
           :payload="b.payload"></box>
    </div>
  </section>
</template>

<script>
  import Box from './Box.vue';

  export default {
    name: 'boxes',
    components: {
      Box,
    },
    data () {
      return {
        boxes: [
          {
            icon: 'fa-signal',
            header: 'Grow your users',
            payload: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ipsum laboriosam,
neque optio perferendis quos? Deleniti dignissimos, exercitationem hic illo, inventore iure perspiciatis porro quam
quod recusandae reiciendis sit sunt.`,
          },
          {
            icon: 'fa-photo',
            header: 'Modern Web Design',
            payload: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ipsum laboriosam,
neque optio perferendis quos? Deleniti dignissimos, exercitationem hic illo, inventore iure perspiciatis porro quam
quod recusandae reiciendis sit sunt.`,
          },
          {
            icon: 'fa-cube',
            header: 'Fast hosting',
            payload: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ipsum laboriosam,
neque optio perferendis quos? Deleniti dignissimos, exercitationem hic illo, inventore iure perspiciatis porro quam
quod recusandae reiciendis sit sunt.`,
          },
        ],
      };
    },
  };
</script>

<style scoped=""></style>
