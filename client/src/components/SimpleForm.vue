<template>
  <form :class="type + '-form'" 
    @submit.prevent="onSubmit"
  >
    <input 
      v-model="currentInput" 
      type="text" 
      :class="type + '-input'" 
      :placeholder="placeholderText"
    />
    <input 
      :class="type + '-submit'" 
      type="submit" 
      :disabled="isEmpty"
    />
  </form>
</template>

<script>

export default {
  name: 'SimpleForm',
  props: {
    placeholderText: {
      type: String,
      required: true,
    }, 
    type: {
      type: String,
      required: true,
    }, 
  },

  emits: ['onSubmit'],

  data() {
    return {
      currentInput: '',
    }
  },

  computed: {
    isEmpty() { return this.currentInput.length < 1 }
  },

  methods: {
    onSubmit() {
      this.$emit('onSubmit', this.currentInput);
      this.currentInput = '';
    },
  },
}
</script>

<style scoped>
  .message-input {
    width: 80%;
  }
</style>
