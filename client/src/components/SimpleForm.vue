<template>
  <form :class="type + '-form'" 
    @submit.prevent="$emit('onSubmit', currentInput)"
  >
    <input 
      v-model="currentInput" 
      type="text" 
      :class="type + '-input'" 
      :placeholder="placeholderText"
    />
    <input :class="type + '-submit'" type="submit" />
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
}
</script>

<style scoped>
</style>
