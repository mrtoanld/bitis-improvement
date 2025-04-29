<template>
  <!-- Web Mode -->
  <div
    v-if="!isMobileSection"
    class="header-wrap-menu lg:block relative flex justify-center"
  >
    <UNavigationMenu :items="items" class="w-full justify-center" />
  </div>
</template>
<script setup lang="ts">
import "~/assets/css/header.css";
import "~/assets/css/header-action.css";
import type { NavigationMenuItem } from "@nuxt/ui";

const props = defineProps({
  isMobileSection: false,
});
const { isMobileSection } = props;

const items = ref<NavigationMenuItem[]>([
  {
    label: "Về Biti's",
  },
  {
    label: "Nam",
    to: "/collection/name",
    children: [
      {
        label: "Hunter",
      },
      {
        label: "Sandal",
      },
      {
        label: "Giày thể thao",
      },
      {
        label: "Giày Chạy Bộ & Đi Bộ",
      },
      {
        label: "Giày Đá Banh",
      },
    ],
  },
  {
    label: "Nữ",
    to: "/collection/name",
    children: [
      {
        label: "Hunter",
      },
      {
        label: "Sandal",
      },
      {
        label: "Giày thể thao",
      },
      {
        label: "Giày Chạy Bộ & Đi Bộ",
      },
      {
        label: "Giày Đá Banh",
      },
    ],
  },
  {
    label: "Bé trai",
    to: "/collection/name",
    children: [
      {
        label: "Hunter",
      },
      {
        label: "Sandal",
      },
      {
        label: "Giày thể thao",
      },
      {
        label: "Giày Chạy Bộ & Đi Bộ",
      },
      {
        label: "Giày Đá Banh",
      },
    ],
  },
  {
    label: "Bé gái",
    to: "/collection/name",
    children: [
      {
        label: "Hunter",
      },
      {
        label: "Sandal",
      },
      {
        label: "Giày thể thao",
      },
      {
        label: "Giày Chạy Bộ & Đi Bộ",
      },
      {
        label: "Giày Đá Banh",
      },
    ],
  },
  {
    label: "Phụ kiện",
    to: "/collection/name",
    children: [
      {
        label: "Balo",
      },
      {
        label: "Balo trẻ em",
      },
      {
        label: "Túi trẻ em",
      },
      {
        label: "Vớ người lớn",
      },
      {
        label: "Vớ trẻ em",
      },
    ],
  },
  {
    label: "Chia sẻ",
    to: "/collection/name",
    children: [
      {
        label: "Xu hướng thời trang",
      },
      {
        label: "Tư vấn chọn size",
      },
      {
        label: "Kinh nghiệm hay",
      },
    ],
  },
]);
</script>
<style scoped></style>
