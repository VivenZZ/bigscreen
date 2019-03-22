<template>
  <div class="home">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide class="swiper-lazy" v-for="(item, index) in swiperData" :key="index" :style="{backgroundImage:'url(' + item + ')'}"></swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
  </div>
</template>

<script>
// @ is an alias to /src
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "home",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperData: [],
      swiperOption: {
        lazy: {
          loadPrevNext: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    setTimeout(()=>{
      this.swiperData = [
        'http://www.harborhousehome.com/UploadFile/Activity/Resources/homeimages/20190321/banner.jpg',
        'http://www.harborhousehome.com/UploadFile/Activity/Resources/homeimages/20180810/HHbanner.jpg',
      ]
    }, 3000)
    console.log(this.swiper)
  }
};
</script>
<style lang="less" scoped>
.home{
  touch-action: none; //禁止 [Intervention] Ignored attempt to cancel a touchmove event with cancelable=false, for example because scrolling is in progress and cannot be interrupted 报错
  .swiper-container{
    width: 1720px;
    height: 980px;
  }
}
</style>

