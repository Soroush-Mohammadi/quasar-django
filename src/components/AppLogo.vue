<template>
  <div class="flex column justify-between items-center">
    <div>
      <q-avatar size="40px">
        <img src="/my-logo.png" />
      </q-avatar>
    </div>
    <div class="q-mt-sm">
      <span class="text-bold bg-black q-pa-xs">H.M.M.A</span>
    </div>
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
