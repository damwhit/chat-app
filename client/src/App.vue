<template>
  <MessagesForm msg="Welcome to Your Vue.js App"/>
</template>

<script>
import MessagesForm from './components/MessagesForm.vue'

export default {
  name: 'App',
  components: {
    MessagesForm
  }
}
</script>

<style>
#app {
  margin: 0 auto;
  max-width: 500px;
}
</style>
