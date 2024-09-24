<template>
  <div class="row items-center justify-center">
    <div class="col-5">
      <q-avatar size="40px">
        <img src="/my-logo.png" />
      </q-avatar>
    </div>
    <div class="col-7">
      <span> Hamrah Mobin</span>
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
