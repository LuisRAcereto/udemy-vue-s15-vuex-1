import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';
// configure store
// you can only have one store for information.
const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
