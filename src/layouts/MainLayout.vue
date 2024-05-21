<template>
  <q-layout view="lhh LpR ffr">
    <div class="toolBar bg-deep-purple-2 row justify-around items-center">
      <div>
        <logo />
        <span class="text-subtitle2 q-ml-sm"> Hamrah Mobin Maham Arvand </span>
      </div>

      <div>
        <svg-icon type="mdi" :path="account"></svg-icon>
        <svg-icon class="q-ml-lg" type="mdi" :path="cart"></svg-icon>
      </div>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import Logo from "components/logo.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiAccount } from "@mdi/js";
import { mdiCart } from "@mdi/js";

defineOptions({
  name: "MainLayout",
});

const account = mdiAccount;
const cart = mdiCart;

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style>
.site-nav {
  background-color: rgb(7, 92, 123);
}

.site-nav > ul {
  display: flex;
  gap: 60px;
  font-size: 28px;
  list-style: none;
}

.toolBar {
  height: 80px;
}
</style>
