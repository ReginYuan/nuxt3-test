<template>
  <div>
    我是布局模板，
    <slot name="one"></slot>
    <div>-------------------</div>
    <slot name="two"></slot>
  </div>
</template>

<script setup>
import {} from "vue";
</script>

<style scoped></style>