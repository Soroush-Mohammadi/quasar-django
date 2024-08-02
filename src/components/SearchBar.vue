<template>
  <q-input rounded standout label="Search" dark>
    <template v-slot:prepend>
      <svg-icon type="mdi" :path="magnify" size="40"></svg-icon>
    </template>
  </q-input>
</template>

<script>
import { ref } from "vue";
import { mdiMagnify } from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";

export default {
  components: {
    SvgIcon,
  },
  setup() {
    const magnify = mdiMagnify;

    return {
      search: ref(""),
      magnify,
    };
  },
};
</script>

<style>
.searchBar {
  height: 70px;
}
</style>
