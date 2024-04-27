<template>
  <div style="width: 100%; height: 100%">
    <micro-app
      name="child"
      :url="appUrl"
      style="width: 100%; height: 100%"
      default-page="/home/test"
      iframe
      @created="createdFuc"
    ></micro-app>
  </div>
</template>

<script setup lang="ts">
  import { onBeforeMount } from "vue";
  let appUrl = "";
  onBeforeMount(() => {
    appUrl = `http://${location.hostname}:3457`;
  });
  const createdFuc = () => {
    console.log("createdFuc====", window);
  };
</script>

<style lang="scss" scoped></style>
