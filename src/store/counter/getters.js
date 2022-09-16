export default {
  finalCounter(state) {
    return state.counter * 2;
  },
  normalizeCounter(_, getters) {
    let finalCounter = getters.finalCounter;
    switch (true) {
      case finalCounter < 0:
        finalCounter = 0;
        break;
      case finalCounter > 100:
        finalCounter = 100;
        break;
      default:
        // do nothing.
        break;
    }
    return finalCounter;
  },
};
