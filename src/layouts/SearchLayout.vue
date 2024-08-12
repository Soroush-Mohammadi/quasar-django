<template>
  <search-items
    :items="localItems"
    style="max-height: 400px; overflow-y: scroll"
    class="bg-blue-8 self-center"
    @reset-input="onResetInput()"
  />
</template>

<script>
import SearchItems from "../components/SearchItems.vue";
export default {
  props: ["items"],
  emit: ["onResetInput"],

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
    onResetInput() {
      this.$emit("onResetInput");
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
