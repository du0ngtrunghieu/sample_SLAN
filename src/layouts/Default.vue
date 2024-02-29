<template>
  <Nav />

  <header class="container">
    <Heads>Blog List</Heads>
  </header>

  <main class="container">
    <router-view />
  </main>

  <footer class="container footer mb-2 mt-auto">
    <Footer />
  </footer>
</template>

<script lang="ts" setup>
import Nav from "@/components/Nav.vue";
import Heads from "@/components/Heads.vue";
import Footer from "@/components/Footer.vue";
</script>
