<template>
  <article>
    {{ message.user }}: {{ message.text }}
  </article>
</template>

<script>

export default {
  name: 'MessageInfo',
  props: {
    message: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style scoped>
</style>
