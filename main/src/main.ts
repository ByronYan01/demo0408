import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import microApp from "@micro-zoe/micro-app";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
microApp.start({
  excludeAssetFilter(assetUrl) {
    console.log("assetUrl===", assetUrl);

    if (assetUrl === "xxx") {
      return true; // 返回true则micro-app不会劫持处理当前文件
    }
    return false;
  },
  plugins: {
    global: [
      {
        excludeChecker(url: string) {
          console.log("excludeChecker url====", url);
          return false;
        },
        loader(code: any, url: any) {
          console.log("global loader==code====", code);
          console.log("global loader==url====", url);

          if ((url || "").indexOf("/xxx/antd.min.js") >= 0) {
            return `window.antd = antd;`;
          }
          return code;
        },
        processHtml(code: string, url: string, options: unknown) {
          console.log("global processHtml==code====", code);
          console.log("global processHtml==url====", url);
          console.log("global processHtml==options====", options);
          const res = code.replace(
            "<title>子应用child</title>",
            `
            <script>
            debugger;
            window.Vue = window.rawWindow.Vue;
            window.VueDemi = window.rawWindow.VueDemi;
            window.VueRouter = window.rawWindow.VueRouter;
            window.ElementPlus = window.rawWindow.ElementPlus;
            window.ElementPlusIconsVue = window.rawWindow.ElementPlusIconsVue;
            window.Pinia = window.rawWindow.Pinia;
            </script>
          <title>子应用child</title>
          `
          );
          console.log("sssss====", res);

          return res;
        }
      }
    ]
  }
});
const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(pinia);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount("#app");
export default app;
