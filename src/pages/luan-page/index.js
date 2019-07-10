import { Vue } from "js/base";
import App from "./index.vue";
import "./index.scss";

// entry file content

new Vue({
  render: h => h(App)
}).$mount("#app");
