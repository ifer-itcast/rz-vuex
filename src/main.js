import Vue from 'vue';
import App from './App.vue';
// #1
import Vuex from 'vuex';
Vue.use(Vuex);

//#2
const store = new Vuex.Store({
  state: {
    count: 0,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  mutations: {
    addCount(state, payload) {
      state.count += payload;
    },
  },
  actions: {
    addCountAsync(context, payload) {
      setTimeout(() => {
        context.commit('addCount', payload);
      }, 1000);
    },
  },
  getters: {
    /* filterList(state) {
      return state.list.filter(item => item > 5)
    } */
    filterList: state => state.list.filter(item => item > 5),
  },
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  // #3
  store,
}).$mount('#app');
