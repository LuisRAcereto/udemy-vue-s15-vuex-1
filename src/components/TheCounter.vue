<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // },
    // brings all the getters from the store specified in the parameter array.
    ...mapGetters(['finalCounter']),
  },
};
</script>
