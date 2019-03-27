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
      switch (this.$store.state.skin) {
        case 'b18a2822-b4af-49ef-8758-996b5f57ab79':
          return 'HH'
        case "09dd00d9-e00e-4ae5-88a6-3b6f8e1cf8f2":
          return 'TAO'
        case "61f1aa48-6e88-471e-a423-599e4672566d":
          return 'II'
        case "4f885d42-28a6-4c49-9b5b-a02dd13cac08":
          return 'MP'
      
        default:
          break;
      }
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
