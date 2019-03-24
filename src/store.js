import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skin: 'HH',
    loadingShow: true,
  },
  mutations: {
    changeSkin (state, str) {
      state.skin = str
    },
    showLoading (state) {
      state.loadingShow = true
    },
    hideLoading (state) {
      state.loadingShow = false
    }
  },
  actions: {

  }
})
