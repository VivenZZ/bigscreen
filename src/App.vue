<template>
  <div id="app" :class="className()">
    <Header />
    <div class="container">
      <router-view  v-if="isRouterAlive" class="roter-view"/>
      <RightNav class="rightNav"/>
      <Loading />
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import RightNav from '@/components/RightNav.vue'
import Loading from '@/components/Loading.vue'
export default {
  name: 'app',
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return{
      isRouterAlive: true,
    }
  },
  components: {
    Header,
    RightNav,
    Loading
  },
  methods: {
    className: function () {
      return this.$store.state.skin
    },
    reload () {
      this.isRouterAlive = false
      this.$nextTick(()=>{
        this.isRouterAlive = true
      })
    }
  },
}
</script>
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  display: flex;
  height: 980px;
  position: relative;
  z-index: 8;
  .roter-view{
    width: 90%;
  }
  .rightNav{
    width: 10%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
