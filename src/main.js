import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
//import env from './env'

//mock开关
const mock = false;
if(mock){
  require('./mock/api');
}
//根据前端的跨域方式做调整 /a/b :/api/a/b => /a/b
axios.defaults.baseURL = ' https://www.easy-mock.com/mock/5fbe0b3d1bc0682deacbfea7/mimall';
//axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
//根据环境变量获取不同的请求地址
//axios.defaults.baseURL = env.baseURL;
//接口错误拦截
axios.interceptors.response.use(function(response){
  let res =  response.data;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    window.location.href = '/#/login';
  }else{
    alert(res.msg);
  }
});


Vue.use(VueAxios,axios);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
