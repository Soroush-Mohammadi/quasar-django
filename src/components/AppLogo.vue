<template>
  <div class="row items-center justify-around">
    <div class="cols=12 md=4">
      <q-avatar size="50px">
        <img src="../assets/Pictures/logo.jpg" />
      </q-avatar>
    </div>
    <div class="col=12 md=8">
      <div class="row justify-around">
        <div class="cols=6 lg=6 md=3">
          <span class="text-subtitle2 text-white text-weight-bold"
            >HAMRAH MOBIN
          </span>
        </div>
        <div class="cols=6 lg=6 md=3">
          <span> MAHAM ARVAND </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from "vue";
import { computed } from "vue";

const LogoComponent = defineComponent({
  name: "App-Logo",
});
</script>

<style>
/* Apply different background color for large screens */
</style>
