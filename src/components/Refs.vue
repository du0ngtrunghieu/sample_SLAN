<template>
  <small v-for="(item, i) in list" :key="i">
    {{ item }}
    <small>{{ i + 1 < list.length ? " - " : "" }}</small>
  </small>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const year = new Date().getFullYear();
const list = reactive([2024, year]);
</script>
