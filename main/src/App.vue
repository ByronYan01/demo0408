<script setup lang="ts">
  import { useRouter } from "vue-router";
  const router = useRouter();
  const loadChild = async () => {
    await router.push("/child");
  };
</script>

<template>
  <section id="app">
    <el-button @click="loadChild">加载子应用</el-button>
    <router-view></router-view>
  </section>
</template>
<style>
  html {
    font-size: 1px;
  }
</style>
<style lang="scss">
  #app {
    height: 100%;
    width: 100%;
  }
</style>
