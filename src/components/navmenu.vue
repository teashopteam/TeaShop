<template>
  <div id="footer" class="footer" v-show="showflag">
    <router-link to="/home" class="footer_c">
      <span class="iconfont ico_index"></span>
      <p class="footer_p">首页</p>
    </router-link>
    <router-link to="/classify " class="footer_c">
      <span class="iconfont ico_ask"></span>
      <p class="footer_p">分类</p>
    </router-link>
    <router-link to="/cart" class="footer_c">
      <span class="iconfont ico_jiao" style="font-size: 0.22rem;"></span>
      <p class="footer_p">购物车</p>
    </router-link>
    <router-link to="/me" class="footer_c">
      <span class="iconfont ico_my"></span>
      <p class="footer_p">我的</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'navmenu',
  data () {
    return {
      showflag: true
    }
  },
  mounted () {
    this.showflag = true
  },
  watch: {
    $route (to, from) {
      this.showflag = true
    }
  },
  methods: {

  }
}
</script>

<style scoped>
</style>
