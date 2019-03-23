<template>
  <div class="home">
      <swiper :options="swiperOptionTop" ref="galleryTop" class="swiperTop banner">
        <swiper-slide v-for="(item, index) in swiperData" 
        :key="index">
          <img v-lazy="item" :key="item">
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <swiper :options="swiperOptionThumbs" ref="galleryThumbs" class="swiperThumbs">
        <swiper-slide v-for="(item, index) in swiperData" 
        :key="index">
          <img v-lazy="item" :key="item">
          <div class="swiper-bg">
            <div>名称</div>
            <div>面积</div>
          </div>
        </swiper-slide>
      </swiper>
      <div v-if="sort" class="sort">
        <div @click="sortFunction(item, index)" :class="currentSort === index ? 'current': ''" v-for="(item, index) in sort" :key="index">{{item}}</div>
      </div>
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
      sort:['客厅', '餐厅', '厨房', '卧室'],
      currentSort: '',
      swiperData: [
        'http://www.taolivingconcept.com/TAOUploadFile/IndexManager/Img/e8d726ef-3c42-440c-b687-289a198f3b0a/201812030950266058.jpg',
      ],
      swiperOptionTop: {
        observer: true,
        observeParents: true,
        spaceBetween: 2,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
      },
      swiperOptionThumbs: {
        observer: true,
        observeParents: true,
        spaceBetween: 2,
        loadPrevNextAmount: 4,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
      }
    };
  },
  computed: {
    // 随时初始化轮播图
    swiperThumbs: function() {
      return this.$refs.galleryThumbs.swiper
    },
    swiperTop: function() {
      return this.$refs.galleryTop.swiper
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    setTimeout(()=>{
      let data = [
        'http://www.inkivy.com/TAOUploadFile/IndexManager/Img/787bc44b-7d51-49b4-b5ff-4bf7e19ffe78/201903210425508442.jpg',
        'http://www.inkivy.com/TAOUploadFile/IndexManager/Img/2e0ba801-b670-41b2-bc82-b24e1d29a97f/201903040335559106.jpg',
        'http://www.inkivy.com/TAOUploadFile/IndexManager/Img/8127b95d-5cf0-4b9e-b4e4-b5baf35b482f/201809300456226664.jpg',
        'http://www.inkivy.com/TAOUploadFile/IndexManager/Img/26626863-9af1-430a-be18-55773b83aa04/201809180437324696.jpg',
        'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-747189.jpg',
        'http://www.harborhousehome.com/UploadFile/Activity/Resources/homeimages/20180810/HHbanner.jpg',
        'http://www.taolivingconcept.com/TAOUploadFile/IndexManager/Img/e68f36a1-3cd1-40df-b180-745e300d03da/201812290610437429.jpg',
        'http://www.taolivingconcept.com/TAOUploadFile/IndexManager/Img/e8d726ef-3c42-440c-b687-289a198f3b0a/201812030950266058.jpg',
      ]
      this.init(data)
    }, 3000)
  },
  methods: {
    // 每次更新数据调用
    init: function(data) {
      this.swiperData = data
      this.$nextTick(()=>{
        // 切换数据的时候返回第一张图
        this.swiperTop.slideTo(0, 1000, false);
        // 绑定缩略图
        this.swiperTop.controller.control = this.swiperThumbs
        this.swiperThumbs.controller.control = this.swiperTop
      })
    },
    // 切换空间
    sortFunction: function(item, index) {
      // 根据切换的空间，切换数据
      let data = [
        'http://www.inkivy.com/TAOUploadFile/IndexManager/Img/787bc44b-7d51-49b4-b5ff-4bf7e19ffe78/201903210425508442.jpg',
        'http://www.inkivy.com/TAOUploadFile/IndexManager/Img/2e0ba801-b670-41b2-bc82-b24e1d29a97f/201903040335559106.jpg',
        'http://www.inkivy.com/TAOUploadFile/IndexManager/Img/8127b95d-5cf0-4b9e-b4e4-b5baf35b482f/201809300456226664.jpg',
        'http://www.inkivy.com/TAOUploadFile/IndexManager/Img/26626863-9af1-430a-be18-55773b83aa04/201809180437324696.jpg',
        'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-747189.jpg',
        'http://www.harborhousehome.com/UploadFile/Activity/Resources/homeimages/20180810/HHbanner.jpg',
        'http://www.taolivingconcept.com/TAOUploadFile/IndexManager/Img/e68f36a1-3cd1-40df-b180-745e300d03da/201812290610437429.jpg',
        'http://www.taolivingconcept.com/TAOUploadFile/IndexManager/Img/e8d726ef-3c42-440c-b687-289a198f3b0a/201812030950266058.jpg',
      ]
      if (this.currentSort !== index) {
        this.currentSort = index
      } else {
        // 如果点击已选中的空间，则替换所有数据, 初始化currentSort 和item
        this.currentSort = ''
        item = ''
        this.init(data)
      }

      switch (item) {
        case '客厅':
          console.log('客厅')
          data = [
            'http://www.inkivy.com/TAOUploadFile/IndexManager/Img/787bc44b-7d51-49b4-b5ff-4bf7e19ffe78/201903210425508442.jpg',
            'http://www.inkivy.com/TAOUploadFile/IndexManager/Img/2e0ba801-b670-41b2-bc82-b24e1d29a97f/201903040335559106.jpg',
            'http://www.inkivy.com/TAOUploadFile/IndexManager/Img/8127b95d-5cf0-4b9e-b4e4-b5baf35b482f/201809300456226664.jpg',
          ]
          this.init(data)
          break;
        case '餐厅':
          console.log('餐厅')
          data = [
            'http://www.harborhousehome.com/UploadFile/Activity/Resources/homeimages/20180810/HHbanner.jpg',
            'http://www.taolivingconcept.com/TAOUploadFile/IndexManager/Img/e68f36a1-3cd1-40df-b180-745e300d03da/201812290610437429.jpg',
            'http://www.taolivingconcept.com/TAOUploadFile/IndexManager/Img/e8d726ef-3c42-440c-b687-289a198f3b0a/201812030950266058.jpg',
          ]
          this.init(data)
          break;
        case '厨房':
          console.log('厨房')
          data = [
            'http://www.inkivy.com/TAOUploadFile/IndexManager/Img/8127b95d-5cf0-4b9e-b4e4-b5baf35b482f/201809300456226664.jpg',
            'http://www.inkivy.com/TAOUploadFile/IndexManager/Img/26626863-9af1-430a-be18-55773b83aa04/201809180437324696.jpg',
            'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-747189.jpg',
          ]
          this.init(data)
          break;
        case '卧室':
          console.log('卧室')
          data = [
            'http://www.harborhousehome.com/UploadFile/Activity/Resources/homeimages/20180810/HHbanner.jpg',
            'http://www.taolivingconcept.com/TAOUploadFile/IndexManager/Img/e68f36a1-3cd1-40df-b180-745e300d03da/201812290610437429.jpg',
            'http://www.taolivingconcept.com/TAOUploadFile/IndexManager/Img/e8d726ef-3c42-440c-b687-289a198f3b0a/201812030950266058.jpg',
          ]
          this.init(data)
          break;
      
        default:
          break;
      }
    }
  }
};
</script>
<style lang="less">
.banner{
  .swiper-button-next{
    width: 120px !important;
    height: 300px !important;
    right: 0 !important;
    margin-top: -150px !important;
    background-color: rgba(0, 0, 0, 0.5)!important;
  }
  .swiper-button-prev{
    width: 120px !important;
    height: 300px !important;
    left: 0 !important;
    margin-top: -150px !important;
    background-color: rgba(0, 0, 0, 0.5)!important;
  }
  .swiper-slide img{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 50%;
  }
}
</style>

<style lang="less" scoped>
.home{
  touch-action: none; //禁止 [Intervention] Ignored attempt to cancel a touchmove event with cancelable=false, for example because scrolling is in progress and cannot be interrupted 报错
  .swiperTop{
    width: 1720px;
    height: 980px;
  }
  .swiperThumbs{
    position: fixed;
    bottom: 0;
    width: 1720px;
    height: 200px;
    background-color: rgba(0 , 0, 0, 1);
    padding: 10px 0;
    box-sizing: border-box;
  }
  .swiperThumbs .swiper-slide {
    width: 20%;
    height: 100%;
    opacity: 0.4;
    box-sizing: border-box;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .swiperThumbs .swiper-slide-active {
    opacity: 1;
  }
  .swiper-slide img{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 50%;
  }
  .swiper-bg{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: rgba(0, 0, 0, .6);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    div{
      margin:0 10px;
    }
  }
  .sort{
    position: fixed;
    bottom: 200px;
    right: 200px;
    display: flex;
    flex-direction: row;
    z-index: 3;
    div{
      padding: 10px 30px;
      background-color: rgba(0, 0, 0, 0.8);
      color: #666;
    }
    .current{
      color: #fff;
    }
  }
}
</style>

