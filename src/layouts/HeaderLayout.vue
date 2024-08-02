<template>
  <div class="row q-pa-md items-center justify-between justify-xl-around">
    <div class="col lg">
      <AppLogo />
    </div>
    <div class="col-3 col-lg-2">
      <q-btn class="full-width" label="categories" flat>
        <TopMenu :menu="menus" />
      </q-btn>
    </div>
    <div class="col col-5">
      <SearchBar />
    </div>
    <div class="col col-4 flex justify-center">
      <WidgetBar />
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from "vue";

defineComponent({
  name: "app-header",
});

const getWidth = computed(() => window.innerWidth);
import AppLogo from "../components/AppLogo.vue";
import TopMenu from "../components/TopMenu.vue";
import SearchBar from "../components/SearchBar.vue";
import WidgetBar from "../components/WidgetBar.vue";
import { ref, watch, computed } from "vue";

import { useMenuStore } from "../stores/menus";
import { storeToRefs } from "pinia";

const store = useMenuStore();
const { menus } = storeToRefs(store);
</script>

<style></style>
