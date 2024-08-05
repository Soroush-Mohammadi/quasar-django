<template>
  <div
    class="row q-pa-md items-center justify-between justify-xl-around"
    style="max-height: 100px"
  >
    <div class="col lg bg-red">
      <AppLogo />
    </div>
    <div class="col-3 col-lg-2">
      <q-btn class="full-width bg-yellow" label="categories" flat>
        <TopMenu :menu="menus" />
      </q-btn>
    </div>
    <div class="col col-5">
      <div class="column">
        <SearchBar class="col" @filter-products="handleSearchProducts" />
      </div>
    </div>
    <div class="col col-4 flex justify-center">
      <WidgetBar />
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, watch } from "vue";
import { useMenuStore } from "../stores/menus";
import { storeToRefs } from "pinia";

import AppLogo from "../components/AppLogo.vue";
import TopMenu from "../components/TopMenu.vue";
import SearchBar from "../components/SearchBar.vue";
import WidgetBar from "../components/WidgetBar.vue";

export default {
  name: "app-header",
  emite: ["search-products"],
  data() {
    return {
      items: [],
    };
  },
  components: {
    TopMenu,
    WidgetBar,
    SearchBar,
    AppLogo,
  },
  setup() {
    const products = ref([null]);
    const store = useMenuStore();
    const { menus } = storeToRefs(store);

    return {
      store,
      products,
      menus,
    };
  },
  methods: {
    handleSearchProducts(data, search) {
      this.$emit("search-products", data, search);
    },
  },
  watch: {
    items() {
      console.log(this.items.length);
    },
  },
};
</script>

<style></style>
