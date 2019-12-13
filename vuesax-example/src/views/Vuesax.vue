<template>
  <div class="home">
    <HelloVuesax />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloVuesax from '@/components/HelloVuesax.vue'

export default {
  name: 'vuesax',
  components: {
    HelloVuesax,
  }
}
</script>
