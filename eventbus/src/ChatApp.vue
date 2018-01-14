<template>
  <div class="chat-container">
    <head class="header">
      <h3>{{ name }}</h3>
    </head>
    <Chat :n="1" class="left-chat" />
    <Chat :n="2" class="right-chat" />
  </div>
</template>

<script>
  import Chat from './components/Chat';
  export default {
    name: 'ChatApp',
    components: {
      Chat,
    },
    data() {
      return {
        name: 'Chat App'
      };
    },
  };
</script>

<style>
  body {
    padding: 0.5%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .chat-container {
    width: 100vw;
    height: 50vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 10fr;
    grid-template-areas:
      "header header"
      "left-chat right-chat";
  }
  .header {
    grid-area: header;
  }
  .left-chat {
    grid-area: left-chat;
  }
  .right-chat {
    grid-area: right-chat;
  }
</style>
