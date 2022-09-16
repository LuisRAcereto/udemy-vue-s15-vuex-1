<template>
  <h3>{{ counter }}</h3>
  <p>We are doing more...</p>
</template>

<script>
export default {
  computed: {
    counter() {
      // Bellow is the syntax to use getters with namespaced module
      return this.$store.getters['numbers/normalizeCounter'];
    },
  },
};
</script>
