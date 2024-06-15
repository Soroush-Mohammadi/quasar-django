<template>
  <div class="flex flex-center column">
    <div class="header bg-light-blue-4 flex row justify-center items-center">
      <div class="searchBar flex row justify-center" style="width: 90vw">
        <div class="bg-light-blue-9 col">
          <Logo />
        </div>
        <div class="bg-light-blue-9 col-1 flex justify-center">
          <q-btn label="categories" flat text-color="white">
            <TopMenu :menu="menus" />
          </q-btn>
        </div>
        <div class="col-4">
          <q-input square outlined label="Search">
            <template v-slot:prepend>
              <svg-icon type="mdi" :path="magnify" size="40"></svg-icon>
            </template>
          </q-input>
        </div>
        <div class="bg-light-blue-9 col-5 flex row items-center justify-center">
          <svg-icon
            class="q-ml-lg"
            type="mdi"
            :path="account"
            style="color: white"
          ></svg-icon>
          <svg-icon
            class="q-ml-lg"
            type="mdi"
            :path="cart"
            style="color: white"
          ></svg-icon>
          <svg-icon
            class="q-ml-lg"
            type="mdi"
            :path="heart"
            style="color: white"
          ></svg-icon>
        </div>
      </div>
    </div>

    <q-page>
      <site-banner :cards="bannerCards" />
      <category-cards :cards="products" />
      <product-show-case :cards="products" />
      <random-category />
      <product-slider
        v-for="product in products.slice(0, 4)"
        :key="product"
        :categories="product.products"
      >
        <template #title>
          {{ product.category }}
        </template>
      </product-slider>

      <app-footer />
      <!-- hame ro nafrest -->
    </q-page>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

import TopMenu from "../components/TopMenu.vue";
import Logo from "../components/logo.vue";
import SiteBanner from "../components/SiteBanner.vue";
import CategoryCards from "../components/CategoryCards.vue";
import ProductShowCase from "../components/ProductShowCase.vue";
import RandomCategory from "../components/RandomCategory.vue";
import ProductSlider from "../components/ProductSlider.vue";
import AppFooter from "../components/AppFooter.vue";

import { useMenuStore } from "../stores/menus";
import { storeToRefs } from "pinia";
import { mdiAccount } from "@mdi/js";
import { mdiCart } from "@mdi/js";
import { mdiMagnify } from "@mdi/js";
import { mdiHeart } from "@mdi/js";
// import { useCategoriesStore } from "../stores/categories";
import { useProductsServer } from "../stores/productsServer";
import SvgIcon from "@jamescoyle/vue-icon";
export default {
  components: {
    TopMenu,
    Logo,
    SvgIcon,
    SiteBanner,
    CategoryCards,
    ProductShowCase,
    RandomCategory,
    ProductSlider,
    AppFooter,
  },

  setup() {
    const store = useMenuStore();
    const { menus } = storeToRefs(store);
    const account = mdiAccount;
    const cart = mdiCart;
    const magnify = mdiMagnify;
    const heart = mdiHeart;
    // const categoriesStore = useCategoriesStore();
    const productServer = useProductsServer();
    // const { categories } = storeToRefs(categoriesStore);
    const { products } = storeToRefs(productServer);
    // const { getCategories } = categoriesStore;
    const { getProducts } = productServer;
    // categoriesStore.getCategories();

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

    onMounted(async () => {
      await getProducts();
      bannerCards.value = await banner(products);
      selectProduct.value = await findProduct(products.value);
      console.log(selectProduct.value);
    });

    // console.log(banner(products.value));

    return {
      menus,
      account,
      cart,
      magnify,
      heart,
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
