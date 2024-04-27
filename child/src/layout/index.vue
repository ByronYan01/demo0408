<script setup lang="ts"></script>

<template>
  <div class="sider-bar-wrap">
    <div>sider</div>
    <router-view />
  </div>
</template>

<style scoped>
  .sider-bar-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
</style>
