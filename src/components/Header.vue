<template>
  <div class="header">
    <div class="brand" >
      <img @click="brandChange(item.currentImage, item.brandId)" v-for="(item, index) in brand" :key="index" :src="currentImage === item.currentImage ? item.currentImage : item.image" alt="">
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
      brand: [
        {
          brandId: 'HH',
          router: 'http://12.3135.15',
          image: 'https://res.purmall.com/Uploads/DeviceBrandCompany/d2f70b147c70418293dbea2b6702d955.png',
          currentImage: 'https://res.purmall.com/Uploads/DeviceBrandCompany/55a54b0235614bdb9ce8bfaf162f3deb.png'
        },
        {
          brandId: 'II',
          router: 'http://12.3135.15',
          image: 'https://res.purmall.com/Uploads/DeviceBrandCompany/0692ec805f3b4aa7bb99626d649f3d0f.png',
          currentImage: 'https://res.purmall.com/Uploads/DeviceBrandCompany/089f8d86424447ff93c8bada7633224e.png'
        },
        {
          brandId: 'TAO',
          router: 'http://12.3135.15',
          image: 'https://res.purmall.com/Uploads/DeviceBrandCompany/eae4b3112b394e35bdd9e956f5372930.png',
          currentImage: 'https://res.purmall.com/Uploads/DeviceBrandCompany/f89964b8263243e1961b31d10f92177b.png'
        },
        {
          brandId: 'MP',
          router: 'http://12.3135.15',
          image: 'https://res.purmall.com/Uploads/DeviceBrandCompany/6c52a48d6fc44a4dae59a9fbbaee7e00.png',
          currentImage: 'https://res.purmall.com/Uploads/DeviceBrandCompany/34be8060fffa4fd5ad26d4de8361c793.png'
        }
      ]
    }
  },
  created () {
    this.brand.forEach(e => {
      if (e.brandId === this.brandId) {
        this.currentImage = e.currentImage
      }
    })
  },
  methods: {
    // 切换图片，切换源，品牌
    brandChange: function (currentImage, id) {
      this.currentImage = currentImage
      this.$store.commit('changeSkin', id)
      //通过id 请求 获取不同品牌的数据源 和 不同皮肤
      this.reload()
    }
  }
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
