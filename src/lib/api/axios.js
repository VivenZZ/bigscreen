import axios from 'axios'
import store from '../../store'
let node = 'Local'
// let node = 'Test'
// let node = 'Integrate'
// let node = 'Formal'
const baseUrl = function(){
  switch (node) {
    case 'Local': 
      // easy mock的请求接口
      return 'https://www.easy-mock.com/mock/5c7df07ac05ec81060cf5443/test'
    case 'Test':
      return '192.168.13.16'
    case 'Integrate':
      return '192.168.20.27'
    case 'Formal':
      return '192.168.18.44'
    default:
      break;
  }
}()

// 设置全局配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = baseUrl
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么

  // 调用store showLoading方法
  store.commit('showLoading')
  console.log('loading...')
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么

  // 调用store hideLoading方法
  store.commit('hideLoading')
  console.log('end...')
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:params
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err)
    })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

 export function post(url,data = {}){
   return new Promise((resolve,reject) => {
     axios.post(url,data)
          .then(response => {
            resolve(response.data);
          },err => {
            reject(err)
          })
   })
 }

 /**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.patch(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}

 /**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.put(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}