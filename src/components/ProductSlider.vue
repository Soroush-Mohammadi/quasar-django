<template>
  <q-page-container class="q-ma-lg">
    <q-toolbar class="bg-purple text-white shadow-2 rounded-borders">
      <div>
        <slot name="title" />
      </div>
      <q-space />
    </q-toolbar>
    <div class="row justify-center">
      <q-card
        class="my-card q-ma-md flex column items-center"
        v-for="product in reduceProducts"
        :key="product.id"
        flat
        bordered
        style="max-width: 300px"
      >
        <slot name="image"> </slot>

        <q-card-section>
          {{ product.id }}
          <div class="text-overline text-orange-9">Overline</div>
          <div class="text-h5 q-mt-sm q-mb-xs">
            {{ exert(product.title, 10) }}
          </div>
          <div class="text-caption text-grey">
            {{ exert(product.description, 60) }}
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page-container>
</template>

<script setup>
import { useProductStore } from "../stores/products";

import { defineProps } from "vue";
import { storeToRefs } from "pinia";

const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
});
const store = useProductStore();
const { products, reduceProducts } = storeToRefs(store);

const { getProducts } = store;
store.getProducts();

const exert = (text, char) => text.slice(0, char);
</script>
