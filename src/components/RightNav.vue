<template>
  <div class="container">
    <router-view class="roter-view"/>
    <div class="right-nav-box">
      <div class="right-nav-top">
        <div class="right-nav-search"></div>
        <div class="right-nav-bag"></div>
        <div class="right-nav-router">
          <router-link v-for="(item, index) in navData" :key="index" :to="item.url">{{item.text}}</router-link> 
        </div>
      </div>
      <div class="back"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightNav',
  data() {
    return {
      navData:[
        {
          text: '灵感居室',
          url: '/'
        },
        {
          text: '热卖商品',
          url: '/about'
        },
        {
          text: '方案中心',
          url: '/about.1'
        },
        {
          text: '视频中心',
          url: '/about.2'
        },
        {
          text: '会员中心',
          url: '/about.3'
        },
        {
          text: '在线杂志',
          url: '/about.4'
        }
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.container {
  display: flex;
  height: 980px;
  position: relative;
  z-index: 8;
  .roter-view{
    width: 1720px;
  }
  .right-nav-box{
    width: 200px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .right-nav-top{
    display: flex;
    flex-direction: column;
    margin-top: 100px;
  }
  .right-nav-router{
    display: flex;
    flex-direction: column;
    line-height: 50px;
    margin-top: 100px;
  }
  .right-nav-search, .right-nav-bag{
    width: 60px;
    height: 60px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 30px auto 0;
  } 
  .back{
    width: 60px;
    height: 60px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto 40px;
  }
}
</style>
