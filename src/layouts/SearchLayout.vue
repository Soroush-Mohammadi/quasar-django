<template>
  <search-items
    :items="localItems"
    style="max-height: 400px; overflow-y: scroll"
    class="bg-blue-8 self-center"
  />
</template>

<script>
import SearchItems from "../components/SearchItems.vue";
export default {
  props: ["items"],

  data() {
    return {
      localItems: [],
    };
  },
  components: {
    SearchItems,
  },
  methods: {
    handleSearchProducts(data, search) {
      if (search !== "") {
        this.localItems = data;
      } else {
        this.localItems.length = 0;
      }
    },
  },

  watch: {
    items(val) {
      this.localItems = val;
    },
  },
};
</script>

<style></style>
