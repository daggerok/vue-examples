<template>
  <div>
    <h3>TODO App</h3>

    <input v-model="newTodo" v-on:keyup.enter="addTodo()">

    <div v-for="t in todoList">
      <span :class="{ complete: !!t.done }">
        <input type="checkbox" :checked="t.done" v-model="t.done">
        {{t.title}}
        <label type="text" v-on:click="removeTodo(t)"> x </label>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'todo-app',
    data() {
      return {
        todoList: [
          {
            title: 'Complete task',
            done: true,
          },
          {
            title: 'Incomplete task',
            done: false,
          },
        ],
        newTodo: '',
      };
    },
    methods: {
      addTodo() {
        if (!this.newTodo || !this.newTodo.trim().length) return;
        this.todoList = [
          {
            title: this.newTodo.trim(),
            done: false,
          },
          ...this.todoList,
        ];
        this.newTodo = '';
      },
      removeTodo(todo) {
        if (!todo.done && !confirm("TODO you going to delete wasn't complete, are you sure?")) return;
        this.todoList = [
          ...this.todoList
                 .filter(t => t.title !== todo.title)
                 .filter(t => t.done !== todo.done)
        ];
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
