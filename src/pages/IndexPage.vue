<template>
  <q-page>
    <site-banner :cards="bannerCards" />
    <category-cards :cards="products" />
    <product-show-case :card="selectProduct" :categories="products" />
    <random-category :card="selectProduct" />
    <product-slider
      v-for="product in products.slice(0, 4)"
      :key="product"
      :categories="product.products"
      :cat="product.category"
    >
      <template #title>
        {{ product.category }}
      </template>
    </product-slider>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useProductStore } from "../stores/productStore";

import SiteBanner from "../components/SiteBanner.vue";
import CategoryCards from "../components/CategoryCards.vue";
import ProductShowCase from "../components/ProductShowCase.vue";
import RandomCategory from "../components/RandomCategory.vue";
import ProductSlider from "../components/ProductSlider.vue";

export default {
  components: {
    SiteBanner,
    CategoryCards,
    ProductShowCase,
    RandomCategory,
    ProductSlider,
  },

  setup() {
    const productStore = useProductStore();
    const { products } = storeToRefs(productStore);
    const { getProducts } = productStore;
    const selectProduct = ref([]);
    const bannerCards = ref([]);

    async function fetchData() {
      await getProducts();
      bannerCards.value = await productStore.banner;
      selectProduct.value = await productStore.findProduct;
    }

    fetchData();

    return {
      products,
      getProducts,
      bannerCards,
      selectProduct,
    };
  },
};
</script>

<style>
.searchBar {
  width: 100vw;
  margin-top: 20px;
}

.header {
  width: 100vw;
  height: 20vh;
}
</style>
