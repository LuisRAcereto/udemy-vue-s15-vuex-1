<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // notice how to use a namespaced module, the namespace of the module
    // should be specified as first parameters in the map.
    ...mapGetters('numbers', ['finalCounter']),
  },
};
</script>
