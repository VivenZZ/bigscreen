<template>
  <SwiperGallery :swiperData="res.switchs" :tagsData="res.tags" :filtsData="filtersData"/>
</template>

<script>
import SwiperGallery from "@/components/SwiperGallery.vue";
export default {
  name: "roomideas",
  data() {
    return {
      res: '',
      filtersData: []
    }
  },
  components: {
    SwiperGallery,
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    this.$post("/index", {}).then(response => {
      this.res = response.Data;
      this.filtersData = ['空间单品', '空间分享']
    });
  },
};
</script>