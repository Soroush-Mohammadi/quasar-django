<template>
  <div>
    <q-toolbar class="bg-purple text-white shadow-2 rounded-borders">
      <div>
        <slot name="title" />
      </div>
      <q-space />
    </q-toolbar>
    <div class="row justify-center">
      <q-card
        class="my-card q-ma-md flex column items-center"
        v-for="product in categories.slice(0, 4)"
        :key="product"
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
            <!-- {{ exert(product.title, 10) }} -->
            {{ product.name }}
          </div>
          <div class="text-caption text-grey">
            <!-- {{ exert(product.description, 60) }} -->
            {{ product.description }}
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
// // import { useProductStore } from "../stores/products";
// import { useProductsServer } from "../stores/productsServer";
// import { storeToRefs } from "pinia";
import { defineProps } from "vue";

// doroste ?
const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
});

// const store = useProductsServer();
// const { products } = storeToRefs(store);

// const { getProducts } = store;
// store.getProducts();

const exert = (text, char) => text.slice(0, char);
</script>
