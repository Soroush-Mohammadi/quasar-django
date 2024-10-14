<template>
  <div class="row items-center justify-md-start justify-between q-my-xs">
    <div class="col-xs-1 col-sm-2 col-md-2 col-lg-1 flex justify-end gt-sm">
      <div
        class="flex items-center justify-evenly bg-blue-10"
        style="border-radius: 10px; width: 150px; height: 100%"
      >
        <RouterLink to="/" class="order-last">
          <img src="/my-logo.png" style="max-width: 40px" />
        </RouterLink>
        <span class="order-first text-bold"> HMMA</span>
      </div>
    </div>
    <div class="col-sm-2 col-md-auto col-lg-auto flex">
      <TopMenu :menu="menus" class="q-mx-md" />
    </div>
    <div class="col-md-6 col-lg-4 gt-sm">
      <SearchBar
        class="col"
        @filter-products="handleSearchProducts"
        :value="resetValue"
      />
    </div>

    <div class="col-3 col-4-md col-lg-6 gt-xs flex justify-end">
      <WidgetBar class="q-mr-lg" />
    </div>
  </div>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiViewList } from "@mdi/js";

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

  props: ["resetValue"],
  data() {
    return {
      items: [],
      path: mdiViewList,
    };
  },
  components: {
    TopMenu,
    WidgetBar,
    SearchBar,
  },
  setup(props) {
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
};
</script>

<style></style>
