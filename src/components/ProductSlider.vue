<template>
  <div>
    <q-toolbar class="bg-primary text-white">
      <div>
        <slot name="title" />
      </div>
      <q-space />
    </q-toolbar>
    <div class="row justify-center">
      <RouterLink
        v-for="product in categories.slice(0, 4)"
        :key="product"
        :to="`/${removeSpace(cat)}/${removeSpace(product.name)}`"
      >
        <q-card
          class="my-card q-ma-md flex column items-center"
          flat
          bordered
          style="max-width: 300px"
        >
          <q-img :src="product.imageUrl" spinner-color="white" />
          <q-card-section>
            <div class="text-overline text-blue">
              <span class="q-mr-md">Price:</span>{{ `${product.price}$` }}
            </div>
            <div class="text-h5 q-mt-sm q-mb-xs">
              {{ product.name }}
            </div>
            <div class="text-caption text-grey">
              {{ product.description }}
            </div>
          </q-card-section>
        </q-card>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useSpaceRemover } from "../composables/useSpaceRemover";

// doroste ?
const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },

  cat: {
    type: String,
    required: true,
  },
});

const exert = (text, char) => text.slice(0, char);

const { removeSpace } = useSpaceRemover();
</script>
