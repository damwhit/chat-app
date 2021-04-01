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
    <SimpleForm
      type="message"
      placeholderText="Text Message"
      @onSubmit="sendMessage"
    />
  </div>
</template>

<script>
import socket from '../socket';
import MessageInfo from './MessageInfo.vue'
import SimpleForm from './SimpleForm.vue'

export default {
  name: 'MessagesList',
  components: {
    MessageInfo,
    SimpleForm,
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
    sendMessage(messageInput) {
      socket.emit('message', { 
        timestamp: Date.now(),
        user: this.currentUser,
        text: messageInput,
      });
    },

    addMessage(message) {
      this.messages.unshift(message);
    },
  },
}
</script>

<style scoped>
  section {
    display: flex;
    flex-direction: column-reverse;
    height: 80vh;
    overflow: scroll;
  }
</style>
