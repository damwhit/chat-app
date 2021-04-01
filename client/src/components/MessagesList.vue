<template>
  <div>
    <h2>Welcome, {{ currentUser }}</h2>
    <section class="messages">
      <MessageInfo
        v-for="message in messages"
        :key="message.timestamp"
        :message="message"
      />
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
  </div>
</template>

<script>
import socket from '../socket';
import MessageInfo from './MessageInfo.vue'

export default {
  name: 'MessagesList',
  components: {
    MessageInfo,
  },

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
        timestamp: Date.now(),
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
    height: 80vh;
    overflow: scroll;
  }
  
  .message-input {
    width: 88%;
  }
</style>
