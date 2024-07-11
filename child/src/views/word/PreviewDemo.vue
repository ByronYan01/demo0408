<template>
  <div>
    <button @click="goPreview">预览 word 文件</button>
    <button @click="downLoad">下载 word 文件</button>
    <div class="doc-render-box">
      <div ref="refFile"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  // 引入axios用来发请求
  import axios from "axios";
  // const docxPromise = () => import('docx-preview')
  // const docx = await docxPromise()
  import { renderAsync } from "docx-preview";

  const service = axios.create({
    baseURL: "http://localhost:3457/职场新人必读书5本推荐.docx",
    // baseURL: '/api/getDoc',
    timeout: 6000
  });

  const refFile = ref(null);

  // console.log('使用插件的 renderAsync 方法来渲染', docx)

  // 预览
  const goPreview = async () => {
    const { data } = await service({
      method: "get",
      responseType: "blob"
    });
    void renderAsync(data, refFile.value);
    // docx.renderAsync(data, refFile.value)
  };
</script>

<style lang="scss" scoped>
  .doc-render-box {
    width: 900px;
    padding-top: 10px;
    margin: 0 auto;
    overflow-x: auto;
  }
</style>
