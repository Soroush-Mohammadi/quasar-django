<template>
  <q-layout view="hhh lpr fFf">
    <q-header
      elavated
      class="bg-primary text-white flex-col"
      style="max-height: 100px"
    >
      <HeaderLayout
        @search-products="search"
        style="position: relative"
        :resetValue="value"
      />
      <SearchLayout
        :items="items"
        class="searchLayout"
        @onResetInput="resetInput"
      />
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
  position: relative;
}
.footer {
  position: static;
}
</style>
