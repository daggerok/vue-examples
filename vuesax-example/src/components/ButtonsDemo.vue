<template>
  <div class="buttons">
    <vs-button color="primary" type="filled">Primary</vs-button>
    <vs-button color="success" type="filled">Success</vs-button>
    <vs-button color="danger" type="filled">Danger</vs-button>
    <vs-button color="warning" type="filled">Warning</vs-button>
    <vs-button color="dark" type="filled">Dark</vs-button>
    <vs-button color="rgb(134, 4, 98)" type="filled">RGB</vs-button>
    <vs-button disabled type="filled">Disabled</vs-button>
    <vs-button color="primary" type="filled" to="/components/list.html">Router</vs-button>
  </div>
</template>

<script>
  export default {
    name: 'ButtonsDemo'
  };
</script>

<style scoped>

</style>
