<template>
  <div id="app">
    {{count}}
    <hr>
    <button @click="handleClick1">+8</button>
    <button @click="handleClick2">+8 async</button>
    <hr>
    {{filterList}}
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  computed: {
    // !#1 获取 Vuex 中 state 的 2 种方式
    /* count() {
      return this.$store.state.count
    } */
    ...mapState(['count']),
    // !#2 获取 Vuex 中 getters 的 2 种方式
    /* filterList() {
      return this.$store.getters.filterList;
    }, */
    ...mapGetters(['filterList'])
  },
  methods: {
    handleClick1() {
      // !#3 触发 Vuex 中 mutations 的 2 种方式
      // this.$store.commit('addCount', 8)
      this.addCount(8)
    },
    ...mapMutations(['addCount']),
    handleClick2() {
      // !#4 触发 Vuex 中 actions 的 2 种方式
      // this.$store.dispatch('addCountAsync', 8)
      this.addCountAsync(8)
    },
    ...mapActions(['addCountAsync'])
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
