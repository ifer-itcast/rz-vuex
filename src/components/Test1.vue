<template>
  <div>
    <!-- //!获取 modules 中的数据方法1 -->
    <p>{{$store.state.user.token}}</p>
    <p>{{$store.state.setting.name}}</p>
    <hr>
    <p>{{token}}</p>
    <p>{{name}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Test1',

  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['token', 'name'])
  },

  methods: {}
}
</script>

<style lang='less' scoped>

</style>
