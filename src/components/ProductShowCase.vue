<template>
  <q-page-container class="flex justify-center items-center q-ma-lg">
    <q-card class="my-card" style="width: 60vw; height: 40vh">
      <div v-if="selectedProduct">
        <h2>Randomly Selected Product:</h2>
        <p>{{ selectedProduct }}</p>
      </div>
    </q-card>
  </q-page-container>
</template>

<script>
export default {
  data() {
    return {
      selectedProduct: null,
    };
  },

  computed: {
    productsInSelectedProduct() {
      return this.selectedProduct ? this.selectedProduct.products : [];
    },

    randomProduct() {
      if (this.productsInSelectedProduct.length > 0) {
        const num = Math.floor(
          Math.random() * this.productsInSelectedProduct.length
        );
        return this.productsInSelectedProduct[num];
      }
      return null;
    },
  },

  watch: {
    product: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.selectedProduct = newVal;
        }
      },
    },
  },

  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
