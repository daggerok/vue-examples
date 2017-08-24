<template>
  <div>
    <h3>TODO App</h3>

    <input v-model="newTodoTitle" v-on:keyup.enter="addNewTodoTitleAction()">

    <div v-for="t in $store.state.todoList">
      <label type="text" v-on:click="removeTodoAction(t)"> x </label>

      <span :class="{ complete: t.done }">
        <input type="checkbox" :checked="t.done" @change="toggleTodoAction(t)">
        {{t.title}}
      </span>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'todo-app',
    computed: {
      newTodoTitle: {
        get: function getNewTodoTitle() {
          return this.$store.state.newTodoTitle;
        },
        set: function setNewTodoTitle(newValue) {
          this.setNewTodoTitleAction(newValue);
        },
      },
    },
    methods: mapActions([
      'addNewTodoTitleAction',
      'removeTodoAction',
      'toggleTodoAction',
      'setNewTodoTitleAction',
    ]),
  };
</script>

<style>
  .complete {
    color: grey;
    text-decoration-line: line-through;
  }
</style>
