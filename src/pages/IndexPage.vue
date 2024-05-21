<template>
  <div class="flex flex-center column">
    <div class="header bg-light-blue-4 flex row justify-around items-center">
      <div class="searchBar flex row justify-around">
        <div class="bg-light-blue-9 col flex justify-center">
          <q-btn
            color="primary"
            label="All Categories"
            size="md"
            flat
            class="text-white q-px-xl"
            :icon="mdiFormatListBulletedSquare"
          >
            <TopMenu />
          </q-btn>
        </div>
        <div class="col-5">
          <q-input class="q-ml-md" rounded outlined label="Search">
            <template v-slot:prepend>
              <svg-icon type="mdi" :path="path" size="40px"></svg-icon>
            </template>
          </q-input>
        </div>
        <div class="bg-light-blue-9 col">another menu</div>
      </div>
    </div>

    <q-page class="flex flex-center column">
      <img
        alt="Quasar logo"
        src="~assets/quasar-logo-vertical.svg"
        style="width: 200px; height: 200px"
      />
    </q-page>
  </div>
</template>

<script setup>
import TopMenu from "../components/TopMenu.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiMagnify } from "@mdi/js";
import { mdiFormatListBulletedSquare } from "@mdi/js";
// import { mdiSunglasses } from "@mdi/js";
// import { mdiShoeCleat } from "@mdi/js";

defineOptions({
  name: "IndexPage",
});

const path = mdiMagnify;
const listIcon = mdiFormatListBulletedSquare;
// const glasses = mdiSunglasses;
// const shoes = mdiShoeCleat;
</script>

<style>
.searchBar {
  width: 100vw;
  margin-top: 20px;
}

.header {
  width: 100vw;
  height: 20vh;
}
</style>
