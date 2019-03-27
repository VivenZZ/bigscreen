<template>
  <div class="header">
    <div class="brand" >
      <img @click="brandChange(item.currImg, item.id)" v-for="(item, index) in skinData" :key="index" :src="currentImage === item.currImg ? item.currImg : item.img" alt="">
    </div>
    <div class="currentImage" :style="'background-image:url(' + currentImage +  ')'">
    </div>
  </div>
</template>

<script>
import {InitMixins} from '../lib/mixins/init.js'
export default {
  name: 'Header',
  mixins: [InitMixins],
  data() {
    return {
      currentImage: '',
    }
  },
  methods: {
    // 切换图片，切换源，品牌
    brandChange: function (currImg, id) {
      this.currentImage = currImg
      this.$store.commit('changeSkin', id)
      //通过id 请求 获取不同品牌的数据源 和 不同皮肤
      this.reload()
    }
  },
  updated() {
    this.skinData.forEach(e => {
      if (e.id === this.brandId) {
        this.currentImage = e.currImg
      }
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header{
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: center;
  position: relative;
  z-index: 9;
  .brand{
    display: flex;
    align-items: center;
    img{
      margin-left: 40px;
    }
  }
  .currentImage{
    width: 300px;
    height: 60px;
    margin-right: 40px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
  }
}
</style>
