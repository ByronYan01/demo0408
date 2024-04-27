import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint"; // 导入包
import { resolve } from "path";
import { Plugin as importToCDN } from "vite-plugin-cdn-import";

export default defineConfig({
  base: "./",
  server: {
    host: "0.0.0.0",
    port: 5678
  },
  preview: {
    host: "0.0.0.0",
    port: 5678
  },
  build: {
    // 假设有原生动态导入支持，并且将会转译得尽可能小
    target: "esnext",
    // 启用混淆，减少模块体积
    minify: false,
    // 小于4096KB得引用资源将转为Base64，减少额外得HTTP请求
    assetsInlineLimit: 4096
  },
  plugins: [
    vue(),
    // visualizer({
    //   open: true
    // }),
    // 增加下面的配置项,这样在运行时就能检查eslint规范
    eslintPlugin({
      include: [
        "src/**/*.ts",
        "src/**/*.d.ts",
        "src/**/*.tsx",
        "src/**/*.vue",
        ".eslintrc.cjs",
        "vite.config.ts"
      ],
      cache: false
    }),
    importToCDN({
      prodUrl: "/other/{name}.{path}",
      modules: [
        {
          name: "vue",
          var: "Vue",
          path: "global.js"
        },
        {
          name: "vue-demi", // vue版本选好 不然会报错
          var: "VueDemi",
          path: "js"
        },
        // {
        //   name: "vue-router",
        //   var: "VueRouter",
        //   path: "global.js"
        // },
        {
          name: "axios",
          var: "axios",
          path: "js"
        },
        {
          name: "element-plus",
          var: "ElementPlus",
          path: "js",
          css: "css"
        },
        {
          name: "@element-plus/icons-vue",
          var: "ElementPlusIconsVue", // 根据main.js中定义的来
          path: "js"
        },
        {
          name: "pinia",
          var: "Pinia",
          path: "js"
        }
      ]
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  }
});
