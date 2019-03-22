<template>
  <div class="right-nav">
    <router-view class="roter-view"/>
    <div class="right-nav-box">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightNav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.right-nav {
  display: flex;
  height: 61.25rem;
  .roter-view{
    flex: 1;
  }
  .right-nav-box{
    width: 12.5rem;
    background-color: #fff;
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
