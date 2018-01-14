<template>
  <div class="chat">
    <h5>chat {{ n }}</h5>
    <div class="row">
      <label for="input-message">Message</label>
      <div class="input-field col s12">
        <input placeholder="message"
               id="input-message"
               class="validate"
               type="text"
               @change="sendMessage"
               v-model="inputMessage">
      </div>
    </div>
    <ul v-for="message in messages">
      <li>message from {{ message.from }}: {{ message.body }}</li>
    </ul>
  </div>
</template>

<script>
  import { eventBus } from './EventBus';

  export default {
    name: 'Chat',
    props: {
      n: {
        type: Number,
        required: true,
        default: -1,
      }
    },
    data() {
      return {
        messages: [],
        inputMessage: '',
      };
    },
    methods: {
      sendMessage() {
        eventBus.$emit('new-message', {
          from: `chat ${this.n}`,
          body: this.inputMessage,
          at: Date.now(),
        });
        this.inputMessage = '';
      },
    },
    created() {
      eventBus.$on('new-message', message => {
        this.messages = [
          message,
          ...this.messages,
        ];
      });
    },
  };
</script>
