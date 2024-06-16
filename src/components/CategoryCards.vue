<template>
  <div class="row bg-blue full-width justify-center">
    <q-card v-for="card in cards" :key="card" class="q-ma-md">
      <!-- <svg-icon type="mdi" :path="shoe" size="60"></svg-icon> -->
      <q-card-section>
        <q-img :src="card.imageUrl" style="min-width: 120px; min-height: 200px">
          <div class="absolute-bottom">
            <span>{{ card.category }}</span>
          </div>
        </q-img>
      </q-card-section>
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
