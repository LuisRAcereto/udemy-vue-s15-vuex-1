import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getters.js';

// A store can have modules (0*),
// Look at counterModule declaration, which have pretty much
// the same elements in its configuration than store.
export default {
  // to use namespace for the moduleuse namespace property
  // this indicates to Vue that the whole module, not just state,
  // should be detacched ofrom the rest of the store.
  namespaced: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters,
};
