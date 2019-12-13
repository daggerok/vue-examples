<template>
  <div class="hello-vuesax">
    <GridDemo />
    <p>Aloha {{ msg || 'Buddy' }}!</p>
    <ButtonsDemo />
  </div>
</template>

<script>
import GridDemo from './GridDemo';
import ColorsDemo from './ColorsDemo';
import ButtonsDemo from './ButtonsDemo';

export default {
  name: 'HelloVuesax',
  components: {
    ButtonsDemo,
    ColorsDemo,
    GridDemo,
  },
  props: {
    msg: String,
  },
}
</script>

<style scoped>

</style>
