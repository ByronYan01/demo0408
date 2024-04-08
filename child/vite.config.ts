import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint"; // 导入包
import federation from "@originjs/vite-plugin-federation";
import { resolve } from "path";
// import { visualizer } from "rollup-plugin-visualizer";
export default defineConfig({
  base: "./",
  server: {
    host: "0.0.0.0",
    origin: "http://localhost:3457",
    port: 3457,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  preview: {
    host: "0.0.0.0",
    port: 3457
  },
  build: {
    // 假设有原生动态导入支持，并且将会转译得尽可能小
    target: "esnext",
    // 启用混淆，减少模块体积
    minify: false,
    // 小于4096KB得引用资源将转为Base64，减少额外得HTTP请求
    assetsInlineLimit: 4096,
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        "vue",
        "vue-demi",
        "vue-router",
        "element-plus",
        "@element-plus/icons-vue",
        "pinia"
      ],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
          "vue-demi": "VueDemi",
          "vue-router": "VueRouter",
          "element-plus": "ElementPlus",
          "@element-plus/icons-vue": "ElementPlusIconsVue",
          pinia: "Pinia"
        }
      }
    }
  },

  plugins: [
    vue(),
    // visualizer({
    //   // open: true
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
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  }
});
