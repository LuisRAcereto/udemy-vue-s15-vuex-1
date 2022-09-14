<template>
  <button @click="addOne">Add 2</button>
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
