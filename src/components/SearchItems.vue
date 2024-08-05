<template>
  <q-list bordered separator>
    <RouterLink
      v-for="product in items"
      :key="product.name"
      :to="`${product.category}/${product.name}`"
    >
      <q-item clickable v-ripple>
        <q-item-section>
          <div class="row justify-start">
            <div class="col-4">
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
import { ref } from "vue";
export default {
  name: "search-items",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const products = ref([
      {
        name: "product-1",
        caprtion: "product-caption",
        price: 30,
        url: "https://placehold.co/60x60",
        quantity: 4,
        category: "sport",
      },
      {
        name: "product-2",
        caprtion: "product-caption",
        price: 59,
        url: "https://placehold.co/60x60",
        quantity: 4,
        category: "books",
      },
      {
        name: "product-3",
        caprtion: "product-caption",
        price: 60,
        url: "https://placehold.co/60x60",
        quantity: 4,
        category: "electronics",
      },
    ]);

    return { products };
  },

  methods: {
    resetSearch() {
      console.log(this.items);
    },
  },
};
</script>

<style></style>
