<template>
  <q-layout view="hhh lpr fFf">
    <q-header elavated class="bg-primary text-white" height-hint="98">
      <HeaderLayout @search-products="search" />
      <SearchLayout :items="items" />
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
.footer {
  position: static;
}
</style>
