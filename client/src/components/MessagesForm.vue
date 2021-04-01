<template>
  <h2>Welcome, {{ currentUser }}</h2>
  <section class="messages">
    <article 
      v-for="message in messages"
      :key="message"
    >
      {{ message.user }}: {{ message.text }}
    </article>
  </section>
  <form class="message-form" @submit.prevent="sendMessage">
    <input 
      class="message-input" 
      v-model="currentMessage" 
      type="text" 
      placeholder="Text message"
    />
    <input class="message-submit" type="submit" />
  </form>
</template>

<script>
import socket from '../socket';

export default {
  name: 'MessagesForm',

  props: {
    currentUser: {
      type: String,
      required: true,
    }
  },

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
      socket.emit('message', { 
        user: this.currentUser,
        text: this.currentMessage,
      });
      this.currentMessage = '';
    },

    addMessage(message) {
      this.messages.unshift(message);
    },
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
