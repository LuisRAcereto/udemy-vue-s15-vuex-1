<template>
  <button @click="addOne">Add 1</button>
</template>

<script>
export default {
  methods: {
    addOne() {
      console.log('ChangeCounter Cmp addOne');
      this.$store.commit('increment');
    },
  },
};
</script>
