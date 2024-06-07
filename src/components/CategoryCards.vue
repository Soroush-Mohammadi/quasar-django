<template>
  <div class="row bg-blue full-width justify-center">
    <q-card
      v-for="cat in 6"
      :key="cat"
      style="width: 200px; height: 250px"
      class="flex column justify-center items-center bg-green-3 q-ma-xs"
    >
      <svg-icon type="mdi" :path="shoe" size="60"></svg-icon>
      <q-card-section>
        <div class="absolute-bottom text-h6">Shoes</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiShoeCleat } from "@mdi/js";

const shoe = mdiShoeCleat;
</script>
