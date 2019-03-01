import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import tagCloud from 'v-tag-cloud';

import VueRouter from "vue-router";
//引入分离出去的routes文件
import { routes } from "./route";
import VueTouch from 'vue-touch';


Vue.prototype.axios = axios;
Vue.use(VueAxios, axios);
Vue.prototype.host = "http://dev.api.qsduihuan.com/";

Vue.use(VueTouch, {name: 'v-touch'});

Vue.use(ElementUI);

Vue.use(VueRouter);

Vue.use(tagCloud);
const router = new VueRouter({
  routes: routes,
  mode: "hash"
});
  //  router.beforeEach((to,from,next)=>{
  //    if(!localStorage.getItem("user")&&to.path!="/login"){
  //       next({ path: "/login" });
  //    }else{
  //      next()
  //    }
  //  })
// router.beforeEach((to, from, next) => {
//   if (!localStorage.getItem("user") && to.path != "/login") {
//     next({ path: "/login" });
//   } else {
    // var arr = localStorage.getItem("routeList")
    //   ? JSON.parse(localStorage.getItem("routeList"))
    //   : [];
    // var index1 = -1;
    // var index2 = -1;
    // for (var i = 0; i < arr.length; i++) {
    //   for (var j = 0; j < arr[i].child.length; j++) {
    //     if (arr[i].child[j].name == to.name) {
    //       index1 = i;
    //       index2 = j;
    //       break;
    //     }
    //   }
    // }
    // if (index1 != -1) {
    //   if (!arr[index1].child[index2].route && arr[index1].child[index2].name) {
    //     next({ path: "/error401" });
    //   } else {
    //     next();
    //   }
    // } else {
    //   next();
    // }
//     next();
//   }
// });
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
