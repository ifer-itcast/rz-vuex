<template>
  <div>
    <!-- //!获取 modules 中的数据方法1 -->
    <p>{{$store.state.user.token}}</p>
    <p>{{$store.state.setting.name}}</p>
    <hr>
    <p>{{token}}</p>
    <p>{{name}}</p>
    <button @click="updateToken">update token</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, createNamespacedHelpers } from 'vuex'
const { mapMutations: mapMutationsUser } = createNamespacedHelpers('user')
export default {
  name: 'Test1',

  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['token', 'name'])
  },

  methods: {
    updateToken() {
      // namespaced 为 false 可以直接调
      // this.$store.commit('updateToken')
      // ! namespaced 为 true，调用方法 1
      // this.$store.commit('user/updateToken')
      // ! namespaced 为 true，调用方法 2
      // this['user/updateToken']()
      // ! namespaced 为 true，调用方法 3
      this.updateToken()
    },
    ...mapMutations(['user/updateToken']),
    ...mapMutationsUser(['updateToken'])
  }
}
</script>

<style lang='less' scoped>

</style>
