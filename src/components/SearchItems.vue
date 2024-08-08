<template>
  <q-list bordered separator dark>
    <RouterLink
      v-for="product in items"
      :key="product.name"
      :to="`/${product.name}`"
      @click="getProduct()"
    >
      <q-item clickable v-ripple>
        <q-item-section>
          <div class="row justify-between items-center">
            <div class="col-2">
              <q-img :src="product.images[0]" width="100px" />
            </div>
            <div
              class="col-8 column justify-around text-black"
              style="list-style: none"
            >
              <li>Name : {{ product.name }}</li>
              <li>{{ product.caption }}</li>
              <li>Price : {{ product.price + "$" }}</li>
              <li>Number : {{ product.quantity }}</li>
            </div>
          </div>
        </q-item-section>
      </q-item>
    </RouterLink>
  </q-list>
</template>

<script>
import { useProductStore } from "../stores/productStore";
import { onBeforeRouteLeave } from "vue-router";
import { watch, ref, computed } from "vue";
export default {
  name: "search-items",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const { products } = useProductStore();
    const productName = ref("");
    const getProduct = () => {
      for (product in products) {
        console.log(
          product.products.find((product) => product.category === "Electronics")
        );
      }
    };

    return {
      products,
      productName,
      getProduct,
    };
  },
};
</script>

<style></style>
