import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";
import $ from "jquery";
import {
  Table,
  Card,
  Collapse,
  Layout,
  Checkbox,
  Radio,
  DatePicker,
  Button,
  Row,
  Col,
  Modal
} from "ant-design-vue";

Vue.config.productionTip = false;

Vue.use(Table);
Vue.use(Card);
Vue.use(Collapse);
Vue.use(Layout);
Vue.use(Checkbox);
Vue.use(Radio);
Vue.use(DatePicker);
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Modal);
Vue.component("v-icon", Icon);
Vue.prototype.$ = $;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
