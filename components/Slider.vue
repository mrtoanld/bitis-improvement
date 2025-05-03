<template>
  <div class="slider-container">
    <UCarousel
      v-slot="{ item }"
      fade
      dots
      auto-height
      auto-width
      :autoplay="{ delay: 2000 }"
      :items="items"
      class="w-full h-auto mx-auto"
    >
      <NuxtImg
        :src="item"
        width="100vw"
        height="auto"
        preload
        loading="lazy"
        alt="slider image"
      />
    </UCarousel>
  </div>
</template>

<script setup lang="ts">
import "~/assets/css/slider.css";

const items = [
  "img/slider/slider1.webp",
  "img/slider/slider2.webp",
  "img/slider/slider3.webp",
  "img/slider/slider4.webp",
  "img/slider/slider5.webp",
  "img/slider/slider6.webp",
];
</script>
