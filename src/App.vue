<template>
  <div id="app" :class="className()">
    <Header brandId="HH"/>
    <RightNav />
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import RightNav from '@/components/RightNav.vue'
export default {
  name: 'app',
  data() {
    return{}
  },
  components: {
    Header,
    RightNav
  },
  methods: {
    className: function () {
      return this.$store.state.skin
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
</style>
