<template>
  <q-page>
    <site-banner :banners="bannerList" />
    <category-cards />
    <product-show-case />
    <random-category />
    <product-slider />
  </q-page>
</template>

<script>
import { ref, onMounted, watch } from "vue";
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
    const store = useProductStore();
    const { parhamData } = store;
    const bannerList = ref([]);
    async function getData() {
      let categories = [];
      try {
        categories = await parhamData();
        bannerList.value = await categories.banners_list;
      } catch (error) {
        console.error("faild", error);
      }
    }

    onMounted(() => getData());

    return {
      parhamData,
      bannerList,
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
