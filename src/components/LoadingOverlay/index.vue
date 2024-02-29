<template>
  <div class="loading-overlay">
    <div class="loading-spinner"></div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "LoadingOverlay",
  setup() {
    const isLoading = ref(false);

    const showLoadingOverlay = () => {
      isLoading.value = true;
    };

    const hideLoadingOverlay = () => {
      isLoading.value = false;
    };

    return {
      isLoading,
      showLoadingOverlay,
      hideLoadingOverlay,
    };
  },
};
</script>

<style>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    255,
    255,
    255,
    0.8
  ); /* Semi-transparent white background */
  z-index: 9999; /* Ensure the overlay is on top of everything */
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-spinner {
  border: 4px solid rgba(0, 0, 0, 0.1); /* Light border */
  border-top: 4px solid #007bff; /* Blue border on top */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite; /* Rotate animation */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
