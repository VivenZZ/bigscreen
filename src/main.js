import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
import VueLazyLoad from 'vue-lazyload' // 懒加载import axios from 'axios'
import {post,fetch,patch,put} from '../src/lib/api/axios.js'
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;

Vue.use(VueLazyLoad,{
  attempt: 3,
  error: './static/error.png',
  loading: require('../src/assets/images/icon/loading.gif')
})
require("../src/lib/reset.css")
require("../src/lib/skin.less")
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

