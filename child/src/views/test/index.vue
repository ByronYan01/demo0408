<script setup lang="ts">
  import { ref } from "vue";

  const value = ref("");

  const options = [
    {
      value: "Option1",
      label: "Option1"
    },
    {
      value: "Option2",
      label: "Option2"
    },
    {
      value: "Option3",
      label: "Option3"
    },
    {
      value: "Option4",
      label: "Option4"
    },
    {
      value: "Option5",
      label: "Option5"
    }
  ];
</script>

<template>
  <el-button>test</el-button>
  <el-select v-model="value" placeholder="Select" size="large" style="width: 240px">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </el-select>
</template>

<style lang="scss"></style>
