<template>
  <div>
    <h3>TODO App</h3>

    <input v-model="newTodoTitle" v-on:keyup.enter="addNewTodoTitle()">

    <div v-for="t in todoList">
      <label type="text" v-on:click="removeTodo(t)"> x </label>

      <span :class="{ complete: t.done }">
        <input type="checkbox" :checked="t.done" @change="toggleTodo(t)">
        {{t.title}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'todo-app',
    computed: {
      todoList() {
        return this.$store.state.todoList;
      },
      newTodoTitle: {
        get: function getnewTodoTitle() {
          return this.$store.state.newTodoTitle;
        },
        set: function setnewTodoTitle(newValue) {
          this.$store.commit('setNewTodoTitle', newValue);
        },
      },
    },
    methods: {
      toggleTodo(todo) {
        this.$store.commit('toggleTodo', todo);
      },
      addNewTodoTitle() {
        this.$store.commit('addNewTodoTitle');
      },
      removeTodo(todo) {
        this.$store.commit('removeTodo', todo);
      }
    },
  };
</script>

<style>
  .complete {
    color: grey;
    text-decoration-line: line-through;
  }
</style>
