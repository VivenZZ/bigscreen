export const InitMixins = {
  data() {
    return {
      loading: true
    }
  },
  inject: ['reload'], // 切换品牌ID的时候, 页面重新加载
  methods: {
    showLoading: function() {
      this.$store.commit('showLoading')
    },
    hideLoading: function() {
      this.$store.commit('hideLoading')
    }
  },
  computed: {
    brandId: function() {
      return this.$store.state.skin
    },
    loadingShow: function() {
      return this.$store.state.loadingShow
    }
  },
}