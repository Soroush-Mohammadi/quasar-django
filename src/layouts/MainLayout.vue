<template>
  <q-layout view="hHh lpR fff" style="background-color: #092a48">
    <div class="container">
      <q-header elavated class="bg-primary text-white flex-col header">
        <HeaderLayout @search-products="search" :resetValue="value" />
        <SearchLayout
          :items="items"
          class="searchLayout"
          @onResetInput="resetInput"
        />
      </q-header>
      <q-page-container class="main">
        <router-view />
      </q-page-container>
      <q-footer class="footer">
        <FooterLayout />
      </q-footer>
    </div>
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
      value: false,
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

    resetInput() {
      this.value = true;
    },
  },
};
</script>

<style>
.searchLayout {
  width: 800px;
  left: 22%;
}
</style>
