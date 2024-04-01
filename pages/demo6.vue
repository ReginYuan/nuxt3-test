<template>
  <div class="">
    <div>Nuxt3 数据请求方式</div>
    {{ data }}
  </div>
</template>

<script setup>
import { ref } from "vue";

// 第一种方式，useAsyncData
// const res = await useAsyncData("getList", () =>
//   $fetch("http://121.36.81.61:8000/getTenArticleList")
// );

// 第二种，
const res = await useFetch("http://121.36.81.61:8000/getTenArticleList");
const data = ref(res);
</script>

<style scoped></style>