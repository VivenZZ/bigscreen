<template>
  <div class="right-nav">
    <div class="right-nav-top">
      <div class="right-nav-search"></div>
      <div class="right-nav-bag"></div>
      <div class="right-nav-router">
        <router-link v-for="(item, index) in navData" :key="index" :to="item.url">{{item.text}}</router-link> 
      </div>
    </div>
    <div class="back"></div>
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
          url: '/hotgoods'
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.right-nav{
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
