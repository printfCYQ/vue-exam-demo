/*
 * @Author: your name
 * @Date: 2020-08-04 15:12:56
 * @LastEditTime: 2020-08-05 10:37:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \echarts-router-master\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/charts",
    name: "Charts",
    component: () => import("../views/Charts.vue")
  },
  {
    path: "/element1",
    name: "ElementUI-1",
    component: () => import("../views/ElementUI-1.vue")
  },
  {
    path: "/element2",
    name: "ElementUI-2",
    component: () => import("../views/ElementUI-2.vue")
  },
  {
    path: "/element3",
    name: "ElementUI-3",
    component: () => import("../views/ElementUI-3.vue")
  },
  {
    path: "/canvas",
    name: "canvas",
    component: () => import("../views/canvas.vue")
  },
  {
    path: "/echarts-gauge",
    name: "echarts-gauge",
    component: () => import("../views/echarts-gauge.vue")
  },
  {
    path: "/echarts-bar",
    name: "echarts-bar",
    component: () => import("../views/echarts-bar.vue")
  },
  {
    path: "/vuePuzzleVcode",
    name: "vuePuzzleVcode",
    component: () => import("../views/vuePuzzleVcode.vue")
  },
  {
    path: "/vueAplayer",
    name: "vueAplayer",
    component: () => import("../views/vueAplayer.vue")
  },
  {
    path: "/tinymce",
    name: "tinymce",
    component: () => import("../views/tinymce.vue")
  },
  {
    path: "/zxQuill",
    name: "zxQuill",
    component: () => import("../views/zxQuill.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
