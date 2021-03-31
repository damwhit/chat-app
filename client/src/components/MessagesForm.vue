<template>
  <main>
    <section>
      messages:
      <article 
        v-for="message in messages"
        :key="message"
      >
        {{ message }}
      </article>
    </section>
    <form @submit.prevent="sendMessage">
      <input v-model="currentMessage" type="text">
      <input type="submit">
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

    socket.on("message", (message) => {
      this.messages.push(message);
    });
  },

  methods: {
    sendMessage() {
      socket.emit('message', this.currentMessage);
      this.currentMessage = '';
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
