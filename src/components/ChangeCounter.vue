<template>
  <button @click="inc">Add 2</button>
  <button @click="increase({ value: 11 })">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addOne() {
    //   console.log('ChangeCounter Cmp addOne');
    //   this.$store.dispatch('increment');
    // },
    // ...mapActions(['increment', 'incrase']),
    ...mapActions({
      inc: 'increment',
      increase: 'increase',
    }),
  },
};
</script>
