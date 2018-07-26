<template>
  <div>
    <h3>Contact List</h3>
    <span class="input-field col s1">
      <i class="material-icons large">sentiment_very_satisfied</i>
    </span>
    <div class="row">
      <span class="input-field col s5">
        <input v-model="newName">
      </span>
      <span class="input-field col s5">
        <input v-model="newPhone">
      </span>
      <button class="input-field col s2" @click="addNewContactAction"> + </button>
    </div>
    <div class="grid">
        <div class="row" v-for="c in $store.state.contactList">
          <span class="item">{{ c.name }}</span>: <span class="item">{{ c.phone }}</span>
        </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  window.$ = window.jQuery = require('jquery');
  require('materialize-css');

  export default {
    name: 'contact-list',
    computed: {
      newName: {
        get: function getNewName() { return this.$store.state.newName },
        set: function setNewName(newValue) { this.setNewNameAction(newValue) }
      },
      newPhone: {
        get: function getNewPhone() { return this.$store.state.newPhone },
        set: function setNewPhone(newValue) { this.setNewPhoneAction(newValue) }
      },
    },
    methods: mapActions([
      'addNewContactAction',
      'setNewNameAction',
      'setNewPhoneAction',
    ]),
    mounted () {
      $('select').material_select();
    },
  };
</script>

<style scoped="">
  @import '~material-design-icons/iconfont/material-icons.css';
  /*@import '~materialize-css/dist/css/materialize.min.css';*/

  ul {
    list-style: none;
  }
  .grid {
    display: grid;
    grid-template-columns: 34% 32% 33%;
    grid-template-rows: 75% 25%;
  }
</style>
