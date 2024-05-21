<template>
  <div class="searchBar">
    <q-input v-model="search" outlined label="search here" />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      search: ref(""),
    };
  },
};
</script>

<style>
.searchBar {
  height: 70px;
}
</style>
