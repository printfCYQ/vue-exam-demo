import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import "./mock";
import request from "@/api/request";
import VueMindmap from "vue-mindmap";
import "vue-mindmap/dist/vue-mindmap.css";
import SuperFlow from "vue-super-flow";
import "vue-super-flow/lib/index.css";

Vue.use(SuperFlow);
Vue.use(VueMindmap);
Vue.prototype.request = request;

Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
