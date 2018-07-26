<template>
  <div>
    <h3>TODO App</h3>

    <input v-model="newTodo" v-on:keyup.enter="addNewTodo()">

    <div v-for="t in todoList">
      <span :class="{ complete: !!t.done }">
        <input type="checkbox" :checked="t.done" @click="toggleTodo(t)">
        {{t.title}}
        <label type="text" v-on:click="removeTodo(t)"> x </label>
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
      newTodo: {
        get: function getNewTodo() {
          return this.$store.state.newTodo;
        },
        set: function setNewTodo(newValue) {
          this.$store.commit('setNewTodo', newValue);
        },
      },
    },
    methods: {
      toggleTodo(todo) {
        this.$store.commit('toggleTodo', todo);
      },
      addNewTodo() {
        this.$store.commit('addNewTodo');
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
