<template>
  <div class="row bg-blue full-width justify-center">
    <q-card v-for="card in cards.slice(4)" :key="card" class="q-ma-xs">
      <!-- <svg-icon type="mdi" :path="shoe" size="60"></svg-icon> -->
      <q-items-section>
        <q-img :src="card.imageUrl" style="min-height: 250px; min-width: 200px">
          <div class="absolute-bottom text-h6">
            <span>{{ card.category }}</span>
          </div>
        </q-img>
      </q-items-section>
    </q-card>
  </div>
</template>

<script setup>
// import SvgIcon from "@jamescoyle/vue-icon";
// import { mdiShoeCleat } from "@mdi/js";
import { defineProps } from "vue";

const props = defineProps({
  cards: {
    type: Array,
    required: true,
  },
});

// const shoe = mdiShoeCleat;
</script>
