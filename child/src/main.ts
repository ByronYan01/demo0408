import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
console.log("router====", router);

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount("#aiDemo");
