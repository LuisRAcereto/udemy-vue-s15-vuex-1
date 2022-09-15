import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';
// configure store
// you can only have one store for information.
const store = createStore({
  state() {
    return {
      counter: 0,
      isLoggedIn: false,
    };
  },
  mutations: {
    increment(state) {
      state.counter += 2;
    },
    increase(state, payload) {
      state.counter += payload.value;
    },
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    // Notice that action can be called the same than the mutation it affects
    increment(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      context.commit('increase', payload);
    },
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
});

const app = createApp(App);

app.use(store);

app.mount('#app');
