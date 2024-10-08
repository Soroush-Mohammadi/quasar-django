<template>
  <div
    class="row q-col-gutter-lg q-mt-xs items-center justify-around justify-xl-around"
  >
    <div class="col-2 flex justify-center">
      <div style="width: 100px">
        <RouterLink to="/">
          <img src="/my-logo.png" style="max-width: 70px" />
        </RouterLink>
      </div>
    </div>
    <div class="col-6">
      <SearchBar
        class="col"
        @filter-products="handleSearchProducts"
        :value="resetValue"
      />
    </div>

    <div class="col-4 flex justify-center">
      <WidgetBar />
    </div>
    <div class="col-12 flex justify-start">
      <TopMenu :menu="menus" class="q-mx-md">
        <template v-slot:icon>
          <svg-icon type="mdi" :path="path" class="q-mx-md"></svg-icon>
        </template>
      </TopMenu>
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
    SvgIcon,
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
