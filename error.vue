<template>
  <div class="error-page">
    <h1>Oops! Something went wrong</h1>
    <p>{{ error.message }}</p>
    <button @click="handleError">Return to Home</button>
  </div>
</template>
<script setup>
const props = defineProps({
  error: Object,
});
const handleError = () => {
  clearError({ redirect: "/" });
};
</script>
<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}
</style>
