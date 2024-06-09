<template>
  <q-page-container class="q-ma-lg">
    <div class="bg-blue-4">
      <div class="text-h3">title</div>
      <div class="text-subtile1">subtitle</div>
    </div>
    <div class="row justify-center">
      <q-card
        class="my-card q-ma-md flex column items-center"
        v-for="product in reduceProducts"
        :key="product.id"
        flat
        bordered
        style="max-width: 280px"
      >
        <q-img :src="product.image" style="max-width: 150px" />

        <q-card-section>
          {{ product.id }}
          <div class="text-overline text-orange-9">Overline</div>
          <div class="text-h5 q-mt-sm q-mb-xs">{{ product.title }}</div>
          <div class="text-caption text-grey">
            {{ product.description }}
          </div>
        </q-card-section>

        <q-card-actions>
          <q-btn flat color="primary" label="Share" />
          <q-btn flat color="secondary" label="Book" />

          <q-space />

          <q-btn
            color="grey"
            round
            flat
            dense
            :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="expanded = !expanded"
          />
        </q-card-actions>

        <q-slide-transition>
          <div v-show="expanded">
            <q-separator />
            <q-card-section class="text-subtitle2"> subtitle </q-card-section>
          </div>
        </q-slide-transition>
      </q-card>
    </div>
  </q-page-container>
</template>

<script setup>
import { useProductStore } from "../stores/products";
import { storeToRefs } from "pinia";
const store = useProductStore();

const { products, reduceProducts } = storeToRefs(store);
const { getProducts } = store;

store.getProducts();
</script>
