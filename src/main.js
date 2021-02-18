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
    // !获取 modules 中的数据方法2，快捷访问
    token: state => state.user.token,
    name: state => state.setting.name
  },
  modules: {
    // !存放子模块的属性
    user: {
      state: {
        token: '#$%^&'
      }
    },
    setting: {
      state: {
        name: 'ifer'
      }
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  // #3
  store,
}).$mount('#app');
