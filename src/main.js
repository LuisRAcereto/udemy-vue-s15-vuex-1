import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

// A store can have modules (0*),
// Look at counterModule declaration, which have pretty much
// the same elements in its configuration than store.
const counterModule = {
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter += 2;
    },
    increase(state, payload) {
      state.counter += payload.value;
    },
  },
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      context.commit('increase', payload);
    },
  },
  getters: {
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
  },
};

// configure store
// you can only have one store for information.
const store = createStore({
  // to associate modules to a store simply add it as part of
  // modules configuration object as displayed below.
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    // Notice that action can be called the same than the mutation it affects
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
