<template>
  <main>
    <MessagesList 
      v-if="currentUser"
      :currentUser="currentUser"
    />
    <SimpleForm 
      v-else
      type="user"
      placeholderText="What is your name?"
      @onSubmit="setCurrentUser"
    />
  </main>
</template>

<script>
import MessagesList from './components/MessagesList.vue'
import SimpleForm from './components/SimpleForm.vue'

export default {
  name: 'App',
  components: {
    MessagesList,
    SimpleForm,
  },

  data() {
    return {
      userInput: '',
      currentUser: null,
    }
  },

  methods: {
    setCurrentUser(userInput) {
      this.currentUser = userInput;
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
