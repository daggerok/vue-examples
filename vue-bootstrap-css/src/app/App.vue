<template>
  <div>
    <ul class="nav nav-tabs">
      <li v-on:click="tabId = 'home'"
          class="ma2"
          v-bind:class="{ active: tabId === 'home' }"><a href="#">Home</a></li>

      <li v-on:click="tabId = 'message'"
          class="ma2"
          v-bind:class="{ active: tabId === 'message' }"><a href="#">Messages</a></li>

      <li v-on:click="tabId = 'profile'"
          class="ma2"
          v-bind:class="{ active: tabId === 'message' }"><a href="#">Profile</a></li>
    </ul>

    <div class="tab-content">
      <div class="tab-pane"
           v-bind:class="{ active: tabId === 'home' }">home tab content... ololo</div>

      <div class="tab-pane"
           v-bind:class="{ active: tabId === 'message' }">message tab content... olololololo-trolololololo</div>

      <div class="tab-pane"
           v-bind:class="{ active: tabId === 'profile' }">profile tab content... trololo</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        tabId: 'message',
      };
    }
  };
</script>

<style scoped>

</style>
