<template>
  <router-view />
</template>

<script setup>
import { useCartStore } from "./stores/cartStore";

const cartStore = useCartStore();
defineOptions({
  name: "App",
});
</script>
