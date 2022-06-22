import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/icomon1/style.css'
import './assets/icomoon/style.css'
import './assets/icomoon_camera/style.css'
import request from './network/request.js'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import msg from './components/common/message'


import { Dialog, Button } from 'vant'
import VueCropper from 'vue-cropper'

Vue.use(Dialog)
Vue.use(Button)
Vue.use(VueCropper)

Vue.use(msg)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$request = request

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')



// axios({
//     url:'/api/article/HUANGJIANFANG',
//     // method:'post'
// }).then(res => {
//     console.log(res)
// })
// request({
//   url:'/api/article/HUANGJIANFANG'
// }).then(res => {
//   // this.article_list = res;
//   console.log('--------');
//   console.log(res);
// }).catch(err=>{
//   console.log('====');
//   console.log(err);
//   // this.article_list = err;
// })


