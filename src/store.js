import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skin: 'b18a2822-b4af-49ef-8758-996b5f57ab79',
    loadingShow: true,
    skinData: []
  },
  mutations: {
    // 获取当前品牌ID
    changeSkin (state, str) {
      state.skin = str
    },
    // 请求loading
    showLoading (state) {
      state.loadingShow = true
    },
    hideLoading (state) {
      state.loadingShow = false
    },
    // 头部导航
    skinData (state, str) {
      state.skinData = str
    }
  },
  actions: {

  }
})
