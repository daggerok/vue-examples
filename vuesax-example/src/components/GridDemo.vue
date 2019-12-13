<template>
  <div class="vs-row-demo">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        100%
      </vs-col>
    </vs-row>

    <vs-row>
      <vs-col :key="index" v-for="col,index in 2" vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
        50%
      </vs-col>
    </vs-row>

    <vs-row>
      <vs-col :key="index" v-for="col,index in 3" v-tooltip="'col - 4'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
        33.3%
      </vs-col>
    </vs-row>

    <vs-row>
      <vs-col :key="index" v-for="col,index in 4" v-tooltip="'col - 3'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="3">
        25%
      </vs-col>
    </vs-row>

    <vs-row>
      <vs-col :key="index" v-for="col,index in 6" v-tooltip="'col - 2'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
        16.6%
      </vs-col>
    </vs-row>

    <vs-row>
      <vs-col :key="index" v-for="col,index in 12" v-tooltip="'col - 1'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="1">
        8.3%
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
  export default {
    name: 'GridDemo',
  };
</script>

<style scoped>

</style>
