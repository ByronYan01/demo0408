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
          console.log("excludeChecker url=includes===", url.includes("other"));
          return url.includes("other");
        },
        // loader(code: any, url: any) {
        //   console.log("global loader==code====", code);
        //   console.log("global loader==url====", url);

        //   if ((url || "").indexOf("/xxx/antd.min.js") >= 0) {
        //     return `window.antd = antd;`;
        //   }
        //   return code;
        // },
        processHtml(code: string, url: string, options: unknown) {
          console.log("global processHtml==code====", code);
          console.log("global processHtml==url====", url);
          console.log("global processHtml==options====", options);
          const regex = /<title>(.*?)<\/title>/g;
          // 在第一个匹配到的 <title> 前插入 <script></script>
          const res = code.replace(regex, function (match) {
            return (
              `<script>
            debugger;
            window.frameElement.contentWindow.Vue = window.rawWindow.Vue;
            window.frameElement.contentWindow.VueDemi = window.rawWindow.VueDemi;
            window.frameElement.contentWindow.VueRouter = window.rawWindow.VueRouter;
            window.frameElement.contentWindow.ElementPlus = window.rawWindow.ElementPlus;
            window.frameElement.contentWindow.ElementPlusIconsVue = window.rawWindow.ElementPlusIconsVue;
            window.frameElement.contentWindow.Pinia = window.rawWindow.Pinia;
            </script>` + match
            );
          });
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
