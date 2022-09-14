<template>
  <button @click="addOne">Add 2</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      console.log('ChangeCounter Cmp addOne');
      this.$store.dispatch('increment');
    },
  },
};
</script>
