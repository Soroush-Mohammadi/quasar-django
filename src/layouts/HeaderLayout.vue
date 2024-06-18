<template>
  <div class="row bg-blue-4 q-pa-md items-center justify-between">
    <div class="col-2">
      <Logo />
    </div>
    <div class="col-2">
      <q-btn
        class="bg-green full-width"
        label="categories"
        flat
        text-color="white"
        push
      >
        <TopMenu :menu="menus" />
      </q-btn>
    </div>
    <div class="col-4">
      <SearchBar />
    </div>
    <div class="col-3 flex justify-center">
      <WidgetBar />
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from "vue";

defineComponent({
  name: "app-header",
});

import Logo from "../components/logo.vue";
import TopMenu from "../components/TopMenu.vue";
import SearchBar from "../components/SearchBar.vue";
import WidgetBar from "../components/WidgetBar.vue";

import { useMenuStore } from "../stores/menus";
import { storeToRefs } from "pinia";

const store = useMenuStore();
const { menus } = storeToRefs(store);
</script>

<style></style>
