<template>
  <main>
    <section>
      <article 
        v-for="message in messages"
        :key="message"
      >
        {{ message }}
      </article>
    </section>
    <form @submit.prevent="sendMessage">
      <input class="message-input" v-model="currentMessage" type="text">
      <input class="message-submit" type="submit">
    </form>
  </main>
</template>

<script>
import socket from '../socket';

export default {
  name: 'MessagesForm',

  data() {
    return {
      messages: [],
      currentMessage: '',
    }
  },

  created() {
    socket.connect();

    socket.on("message", (message) => this.addMessage(message));
  },

  methods: {
    sendMessage() {
      socket.emit('message', this.currentMessage);
      this.currentMessage = '';
    },

    addMessage(message) {
      this.messages.unshift(message);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  section {
    display: flex;
    flex-direction: column-reverse;
    height: 90vh;
    overflow: scroll;
  }
  
  .message-input {
    width: 88%;
  }
</style>
