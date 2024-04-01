<template>
  <div class="">
    demo2
  <div class="">获取的id:{{ id }}</div>
  <div class="">获取的name:{{ name }}</div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import { useRoute } from "vue-router";
const route = useRoute();
const id = ref(route.params.id);
const name = ref(route.params.name);
</script>

<style scoped></style>