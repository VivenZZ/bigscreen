<template>
  <div class="home">
    <transitionTemple :transitionData="'fade'">
      <div v-if="showSwiper" style="position:relative">
        <swiper :options="swiperOptionTop" ref="galleryTop" class="swiperTop banner">
          <swiper-slide v-for="(item, index) in swiperData1" :key="index">
            <img v-lazy="item.bgPic" :key="item.bgPic">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <div class="tags" :class="tagsBox ? 'divAnimationAdd': 'divAnimationRemove'">
          <div class="showbtn" @click="handleClick">{{tagsBox? '收起': '展开'}}</div>
          <div class="tags-box">
            <div class="sort">
              <div
                @click="sortFunction(item, index)"
                :class="currentSort === index ? 'current': ''"
                v-for="(item, index) in sort"
                :key="index"
              >{{item}}</div>
            </div>
            <swiper :options="swiperOptionThumbs" ref="galleryThumbs" class="swiperThumbs">
              <swiper-slide v-for="(item, index) in swiperData1" :key="index">
                <img v-lazy="item.bgPic" :key="item.bgPic">
                <div v-if="text" class="swiper-bg">
                  <div>名称</div>
                  <div>面积</div>
                </div>
              </swiper-slide>
            </swiper>
            <div class="btn">
              <div
                @click="btnFunction(item, index)"
                :class="currentBtn[index] === 1 ? 'current': ''"
                v-for="(item, index) in btn"
                :key="index"
              >{{item}}</div>
            </div>
          </div>
        </div>
        <transitionTemple :transitionData="'top'">
        <div class="alone-box" v-if="aloneBox">
          <swiper :options="swiperGoods" class="swiperGoods">
            <swiper-slide v-for="(item, index) in goods" :key="index" class="text">
              <img class="goodsPic" :src="item.picture" alt="" srcset="">
              <div class="goodsInfo">
                <h3>{{item.productname}}</h3>
                <p class="currentPrice">
                  <del v-if="item.price !== item.pricediscount">￥{{item.price}}</del>
                  <span>￥{{item.pricediscount}}</span>
                </p>
                <p class="shop">购买</p>
              </div>
            </swiper-slide>
            <div class="swiper-scrollbar" slot="scrollbar"></div>
          </swiper>
        </div>
        </transitionTemple>
      </div>
    </transitionTemple>
  </div>
</template>

<script>
// @ is an alias to /src
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { InitMixins } from "../lib/mixins/init.js";
import transitionTemple from "@/components/transition.vue";
export default {
  name: "SwiperGallery",
  mixins: [InitMixins],
  props: {
    swiperData: {
      type: Array
    },
    tagsData:{
      type: Array
    },
    filtsData:{
      type: Array
    },
  },
  components: {
    swiper,
    swiperSlide,
    transitionTemple
  },
  data() {
    const self = this
    return {
      aloneBox: false,
      tagsBox: true,
      sort: [],
      btn: ["空间单品", "空间分享"],
      sourceData: [],
      swiperData1: [],
      goods: [],
      text: "",
      currentSort: "",
      currentBtn: [0, 0],
      swiperOptionTop: {
        observer: true,
        observeParents: true,
        spaceBetween: 2,
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        on: {
          slideChangeTransitionEnd: function(){
            self.goods = self.swiperData[this.activeIndex].goods
          },
        },
      },
      swiperOptionThumbs: {
        observer: true,
        observeParents: true,
        spaceBetween: 10,
        loadPrevNextAmount: 4,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true,
        freeDom: true
      },
      swiperGoods: {
          direction: 'vertical',
          slidesPerView: 'auto',
          freeMode: true,
          scrollbar: {
            el: '.swiper-scrollbar'
          },
          mousewheel: true
        }
    };
  },
  watch: {
    swiperData: function(newValue) {
      this.swiperData1 = newValue
      this.sourceData = newValue
      this.init(newValue);
    },
    tagsData: function(newValue) {
      this.sort = newValue
    },
  },
  computed: {
    // 随时初始化轮播图
    swiperThumbs: function() {
      if (this.$refs.galleryThumbs) {
        return this.$refs.galleryThumbs.swiper;
      }
      return null;
    },
    swiperTop: function() {
      if (this.$refs.galleryTop) {
        return this.$refs.galleryTop.swiper;
      }
      return null;
    },
    // 界面显示隐藏，条件放一起，防止以后需求增加
    showSwiper: function() {
      if (this.swiperData1.length === 0) {
        return false;
      } else {
        return true;
      }
    },
    currentIndex: function() {
      return this.$refs.galleryTop.swiper.activeIndex
    }
  },
  // mounted() {
  //   // current swiper instance
  //   // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
  //   this.$post("/index", {}).then(response => {
  //     let res = response.Data;
  //     // 保存原数据
  //     this.sourceData = res.switchs;
  //     // 图片数据
  //     this.init(res.switchs);
  //     // 空间数据
  //     this.sort = res.tags;
  //   });
  // }, 
  methods: {
    // 每次更新数据调用
    init: function(data) {
      this.swiperData1 = JSON.parse(JSON.stringify(data));
      this.$nextTick(() => {
        // 切换数据的时候返回第一张图
        this.swiperTop.slideTo(0, 0, false);
        this.swiperTop.update();
        // 绑定缩略图
        this.swiperTop.controller.control = this.swiperThumbs;
        this.swiperThumbs.controller.control = this.swiperTop;

        // 获取当前第一张图片的商品
        this.goods = this.swiperData[0].goods
      });
    },
    // 商品，缩略图等显示隐藏界面
    btnFunction: function(item, index) {
      if (this.currentBtn[index] === 0) {
        this.currentBtn.splice(index, 1, 1);
      } else {
        this.currentBtn.splice(index, 1, 0);
      }
      this.aloneBox = !this.aloneBox
    },
    // 切换空间
    sortFunction: function(item, index) {
      // 根据切换的空间，切换数据
      if (this.currentSort !== index) {
        this.currentSort = index;
        this.init(this.getSortData(item, this.sourceData));
      } else {
        // 如果点击已选中的空间，则替换所有数据, 初始化currentSort 和item
        this.currentSort = "";
        item = "";
        this.init(this.sourceData);
      }
    },
    // 获取当前空间下的数据
    getSortData: function(item, data) {
      let sortData = [];
      for (let i in data) {
        if (data[i].tag === item) {
          sortData.push(data[i]);
        }
      }
      return sortData;
    },
    handleClick: function() {
      this.tagsBox = !this.tagsBox;
    }
  }
};
</script>
<style lang="less" scoped>
.banner {
  .swiper-button-next {
    width: 120px !important;
    height: 300px !important;
    right: 0 !important;
    margin-top: -150px !important;
    background-color: rgba(0, 0, 0, 0.5) !important;
  }
  .swiper-button-prev {
    width: 120px !important;
    height: 300px !important;
    left: 0 !important;
    margin-top: -150px !important;
    background-color: rgba(0, 0, 0, 0.5) !important;
  }
  .swiper-slide img {
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
  .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    background: #333;
  }
} //禁止 [Intervention] Ignored attempt to cancel a touchmove event with cancelable=false, for example because scrolling is in progress and cannot be interrupted 报错
  .swiperTop {
    width: 100%;
    height: 980px;
    .swiper-slide img {
      width: 100%;
      height: auto;
      -ms-transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      position: absolute;
      left: 50%;
      top: 50%;
    }
  }
  .swiperThumbs {
    width: 100%;
    height: 160px;
    background-color: rgba(0, 0, 0, 1);
    padding: 10px 0;
    box-sizing: border-box;
    .swiper-slide img {
    width: 100%;
    height: auto;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 50%;
  }
  }
  .swiperThumbs .swiper-slide {
    width: 20%;
    height: 100%;
    overflow: hidden;
    opacity: 0.4;
    box-sizing: border-box;
  }
  .swiperThumbs .swiper-slide-active {
    opacity: 1;
  }
  
  .swiper-slide img[lazy="loading"] {
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
  .swiper-bg {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    div {
      margin: 0 10px;
    }
  }
  .tags {
    position: fixed;
    width: 90%;
    bottom: -160px;
    z-index: 9;
    display: flex;
    flex-direction: column;
  }
  .tags-box {
    position: relative;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }
  .sort,
  .btn {
    display: flex;
    flex-direction: row;
    z-index: 3;
    div {
      padding: 10px 20px;
      background-color: rgba(0, 0, 0, 0.8);
      color: #666;
      writing-mode: vertical-lr;
    }
    .current {
      color: #fff;
    }
  }
  .showbtn {
    width: 100px;
    padding: 0 20px;
    height: 50px;
    line-height: 50px;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .alone-box{
    width: 600px;
    max-height: 820px;
    position: fixed;
    top: 100px;
    right: 10%;
    background-color: white;
    z-index: 6;
    .swiperGoods{
       width: 600px;
      max-height: 820px !important;
      overflow: hidden;
    }
    .swiper-slide.text {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      height: 300px;
      padding: 20px;
      overflow: hidden;
      border-bottom: 1px solid #ccc;
      text-align: left;
    }
    .goodsPic{
      width: 260px;
      height: 260px;
      border: 1px solid #ccc;
      margin-right: 20px;
    }
    .goodsInfo{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .currentPrice{
      margin-top: 20px;
      del{
        margin-right: 20px;
        font-size: 18px
      }
      span{
        color: red;
        font-size: 24px
      }
    }
    .shop{
      text-align: right;
    }
  }
  .divAnimationRemove {
    animation: divAnimationRemove 0.5s;
    animation-fill-mode: forwards;
  }
  .divAnimationAdd {
    animation: divAnimationAdd 0.5s;
    animation-fill-mode: forwards;
  }
  @keyframes divAnimationAdd {
    from {
      bottom: "-160px";
    }
    to {
      bottom: 0;
    }
  }
  @keyframes divAnimationRemove {
    from {
      bottom: 0;
    }
    to {
      bottom: "-160px";
    }
  }
</style>

