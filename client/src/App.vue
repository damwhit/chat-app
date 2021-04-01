<template>
  <main>
    <MessagesForm 
      v-if="currentUser"
      :currentUser="currentUser"
    />
    <form class="user-form" v-else @submit.prevent="setCurrentUser">
      <input 
        class="user-input" 
        v-model="userInput" 
        type="text" 
        placeholder="What is your name?"
      />
      <input class="user-submit" type="submit" />
    </form>
  </main>
</template>

<script>
import MessagesForm from './components/MessagesForm.vue'

export default {
  name: 'App',
  components: {
    MessagesForm,
  },

  data() {
    return {
      userInput: '',
      currentUser: null,
    }
  },

  methods: {
    setCurrentUser() {
      this.currentUser = this.userInput;
    },
  },
}
</script>

<style>
#app {
  margin: 0 auto;
  max-width: 550px;
}
</style>
