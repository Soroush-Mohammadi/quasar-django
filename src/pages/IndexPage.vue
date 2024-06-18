<template>
  <q-page>
    <site-banner :cards="bannerCards" />
    <category-cards :cards="products" />
    <product-show-case :card="selectProduct" />
    <random-category :card="selectProduct" />
    <product-slider
      v-for="product in products.slice(0, 4)"
      :key="product"
      :categories="product.products"
    >
      <template #title>
        {{ product.category }}
      </template>
    </product-slider>

    <!-- hame ro nafrest -->
  </q-page>
</template>

<script>
import { ref } from "vue";

import SiteBanner from "../components/SiteBanner.vue";
import CategoryCards from "../components/CategoryCards.vue";
import ProductShowCase from "../components/ProductShowCase.vue";
import RandomCategory from "../components/RandomCategory.vue";
import ProductSlider from "../components/ProductSlider.vue";

import { storeToRefs } from "pinia";

// import { useCategoriesStore } from "../stores/categories";
import { useProductsServer } from "../stores/productsServer";
export default {
  components: {
    SiteBanner,
    CategoryCards,
    ProductShowCase,
    RandomCategory,
    ProductSlider,
  },

  setup() {
    // const categoriesStore = useCategoriesStore();
    const productServer = useProductsServer();
    // const { categories } = storeToRefs(categoriesStore);
    const { products } = storeToRefs(productServer);
    // const { getCategories } = categoriesStore;
    const { getProducts } = productServer;
    // categoriesStore.getCategories();

    getProducts();

    // productServer.getProducts();

    const selectProduct = ref([]);

    const findProduct = async (myArr) => {
      const num = Math.floor(Math.random() * myArr.length);
      return myArr[num];
    };

    const banner = async (arr) => {
      const cards = [];

      for (var i = 0; i < 3; i++) {
        const num = Math.floor(Math.random() * arr.value.length);
        cards.push(arr.value[num]);
      }

      return cards;
    };

    const bannerCards = ref([]);

    async function fetchData() {
      await getProducts();
      bannerCards.value = await banner(products);
      selectProduct.value = await findProduct(products.value);
    }

    fetchData();

    // console.log(banner(products.value));

    return {
      products,
      getProducts,
      banner,
      bannerCards,
      selectProduct,
    };
  },
};

// const glasses = mdiSunglasses;
// const shoes = mdiShoeCleat;
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
