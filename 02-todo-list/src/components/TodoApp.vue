<template>
  <div>
    <h3>TODO App</h3>

    <p>TODO: implement addition...</p>

    <div v-for="todo in todoList">
      <span :class="{ complete: !!todo.done }">
        <input type="checkbox" :checked="todo.done" v-model="todo.done">
        {{todo.title}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'todo-app',
    data: () => ({
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
    }),
  };
</script>

<style>
  .complete {
    color: grey;
    text-decoration-line: line-through;
  }
</style>
