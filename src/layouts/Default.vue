<template>
  <Nav />

  <header class="container">
    <Heads>Blog List</Heads>
  </header>

  <main class="container">
    <LoadingOverlay v-if="loading" />
    <router-view />
  </main>

  <footer class="container footer mb-2 mt-auto">
    <Footer />
  </footer>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "vuex";

import Nav from "@/components/Nav.vue";
import Heads from "@/components/Heads.vue";
import Footer from "@/components/Footer.vue";
import LoadingOverlay from "@/components/LoadingOverlay/index.vue";

const store = useStore();
const loading = computed(() => store.getters.isLoading);
</script>
