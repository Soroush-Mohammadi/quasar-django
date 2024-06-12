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
      <site-banner />
      <category-cards />
      <product-show-case />
      <random-category />
      <product-slider
        v-for="cat in categories"
        :key="cat.id"
        :categories="categoreis"
      >
        <template #title>
          {{ cat.name }}
        </template>
        <template #image>
          <q-img :src="cat.image" class="q-mt-md" style="max-width: 200px" />
        </template>
        <!-- this is a wrong approach -->
      </product-slider>
      <app-footer />
      <!-- hame ro nafrest -->
    </q-page>
  </div>
</template>

<script>
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
import { useCategoriesStore } from "../stores/categories";

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

  data() {},

  setup() {
    const store = useMenuStore();
    const { menus } = storeToRefs(store);
    const account = mdiAccount;
    const cart = mdiCart;
    const magnify = mdiMagnify;
    const heart = mdiHeart;
    const categoriesStore = useCategoriesStore();
    const { categories } = storeToRefs(categoriesStore);
    const { getCategories } = categoriesStore;
    categoriesStore.getCategories();

    return {
      menus,
      account,
      cart,
      magnify,
      heart,
      categories,
      getCategories,
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
