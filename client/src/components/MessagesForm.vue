<template>
  <main>
    <section>
      messages:
    </section>
    <form @submit.prevent>
      <input type="text">
      <input type="submit">
    </form>
  </main>
</template>

<script>
export default {
  name: 'MessagesForm',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
