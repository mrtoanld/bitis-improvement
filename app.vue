<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup>
useHead({
  link: [
    {
      rel: "preload",
      type: "font/woff2",
      href: "/assets/fonts/futura-regular.woff",
      as: "font",
      crossorigin: "",
    },
  ],
});
</script>
