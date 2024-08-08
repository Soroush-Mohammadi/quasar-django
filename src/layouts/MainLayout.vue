<template>
  <q-layout view="hhh lpr fFf">
    <q-header
      elavated
      class="bg-primary text-white flex-col"
      style="max-height: 100px"
    >
      <HeaderLayout @search-products="search" style="position: relative" />
      <SearchLayout :items="items" class="searchLayout" />
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="footer">
      <FooterLayout />
    </q-footer>
  </q-layout>
</template>

<script>
import SearchLayout from "./SearchLayout.vue";
import HeaderLayout from "./HeaderLayout.vue";
import FooterLayout from "./FooterLayout.vue";

export default {
  data() {
    return {
      items: [],
    };
  },
  components: {
    HeaderLayout,
    FooterLayout,
    SearchLayout,
  },
  setup() {
    return {};
  },

  methods: {
    search(data, search) {
      if (search !== "") {
        this.items = data;
      } else {
        this.items.length = 0;
      }
    },
  },
};
</script>

<style>
.searchLayout {
  width: 800px;
  left: 22%;
  position: relative;
}
.footer {
  position: static;
}
</style>
