<template>
  <div class="row items-center justify-md-center justify-start q-py-md">
    <div class="col-1 flex justify-center gt-md">
      <div style="width: 100px">
        <RouterLink to="/">
          <img src="/my-logo.png" style="max-width: 70px" />
        </RouterLink>
      </div>
    </div>
    <div class="col flex justify-start">
      <TopMenu :menu="menus" class="q-mx-md" />
    </div>
    <div class="col-6 col-4-md gt-md">
      <SearchBar
        class="col"
        @filter-products="handleSearchProducts"
        :value="resetValue"
      />
    </div>

    <div class="col-2 col-4-md gt-md">
      <WidgetBar />
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
