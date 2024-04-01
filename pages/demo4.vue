<template>
  <div class="">{{ time }}</div>
</template>

<script setup>
import { ref } from "vue";
const time = ref(getTime());
</script>

<style scoped></style>