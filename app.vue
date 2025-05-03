<template>
  <div>
    <UApp>
      <NuxtPage />
    </UApp>
  </div>
</template>
<script setup lang="ts">
useHead({
  link: [
    {
      rel: "preload",
      type: "font/woff2",
      href: "/fonts/futura-regular.woff",
      as: "font",
      crossorigin: "",
    },
  ],
});
useSeoMeta({
  title: "Biti's Homepage",
  ogTitle: "Biti's Homepage",
  description: "This is my custom homepage site based on the original website.",
  ogDescription:
    "This is my custom homepage site based on the original website.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>
