<template>
  <q-input
    rounded
    standout
    label="Search"
    dark
    v-model="search"
    :value="searchValue"
    @focus="searchValue = ''"
  >
    <template v-slot:prepend>
      <svg-icon type="mdi" :path="magnify" size="30px"></svg-icon>
    </template>
  </q-input>
</template>

<script>
import { ref, watch } from "vue";
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

  props: ["value"],
  components: {
    SvgIcon,
  },
  emits: ["filter-products"],
  setup(props) {
    const magnify = mdiMagnify;
    const search = ref("");
    const searchValue = ref("");
    const store = useProductStore();
    const { products } = storeToRefs(store);

    watch(
      () => props.value,
      (val) => {
        if (val) {
          search.value = "";
        }
      }
    );

    return {
      search,
      magnify,
      products,
      searchValue,
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
      this.$emit("filter-products", this.searchProducts, this.search);
    },
  },
};
</script>

<style>
.searchBar {
  height: 70px;
}
</style>
