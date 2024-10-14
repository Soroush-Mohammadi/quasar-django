<template>
  <div
    class="flex items-center justify-evenly bg-blue-10"
    style="border-radius: 10px; width: 150px; height: 100%"
  >
    <RouterLink to="/" class="order-last">
      <img src="/my-logo.png" style="max-width: 40px" />
    </RouterLink>
    <span class="order-first text-bold"> HMMA</span>
  </div>
</template>

<script setup>
import { defineComponent } from "vue";

const LogoComponent = defineComponent({
  name: "App-Logo",
});
</script>

<style>
/* Apply different background color for large screens */
</style>
