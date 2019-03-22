<template>
  <div id="app">
    <Header brandId="HH"/>
    <RightNav />
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import RightNav from '@/components/RightNav.vue'
export default {
  name: 'app',
  components: {
    Header,
    RightNav
  }
}
</script>
<style lang="less">
@import "../src/lib/reset.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
