<template>
  <div class="row full-width justify-center">
    <RouterLink
      v-for="card in cards"
      :key="card"
      class="q-ma-md"
      :to="removeSpace(card.category)"
    >
      <q-card>
        <!-- <svg-icon type="mdi" :path="shoe" size="60"></svg-icon> -->
        <q-card-section>
          <q-img
            :src="card.imageUrl"
            style="min-width: 120px; min-height: 200px"
          >
            <div class="absolute-bottom">
              <span>{{ card.category }}</span>
            </div>
          </q-img>
        </q-card-section>
      </q-card>
    </RouterLink>
  </div>
</template>

<script setup>
// import SvgIcon from "@jamescoyle/vue-icon";
// import { mdiShoeCleat } from "@mdi/js";
import { defineProps } from "vue";
import { useSpaceRemover } from "../composables/useSpaceRemover";

const { props } = defineProps({
  cards: {
    type: Array,
    required: true,
  },
});

const { removeSpace } = useSpaceRemover();

// const shoe = mdiShoeCleat;
</script>
