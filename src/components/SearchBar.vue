<template>
  <q-input rounded standout label="Search" dark v-model="search">
    <template v-slot:prepend>
      <svg-icon type="mdi" :path="magnify" size="40"></svg-icon>
    </template>
  </q-input>
</template>

<script>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { mdiMagnify } from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";
import { useProductStore } from "../stores/productStore";

export default {
  data() {
    return {
      searchProducts: [],
    };
  },
  components: {
    SvgIcon,
  },
  emits: ["filter-products"],
  setup() {
    const magnify = mdiMagnify;
    const search = ref("");
    const store = useProductStore();
    const { products } = storeToRefs(store);

    return {
      search,
      magnify,
      products,
    };
  },
  computed: {
    getProducts() {
      return this.products.flatMap((product) => product.products);
    },
  },

  watch: {
    search(newVal) {
      this.searchProducts = this.getProducts.filter((product) => {
        return product.name.toLowerCase().includes(newVal.toLowerCase());
      });
    },
    searchProducts() {
      this.$emit("filter-products", this.searchProducts);
    },
  },
};
</script>

<style>
.searchBar {
  height: 70px;
}
</style>
