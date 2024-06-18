<template>
  <q-layout view="hhh lpr fFf">
    <q-header elavated class="bg-primary text-white" height-hint="98">
      <HeaderLayout />
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
import HeaderLayout from "./HeaderLayout.vue";
import FooterLayout from "./FooterLayout.vue";

export default {
  components: {
    HeaderLayout,
    FooterLayout,
  },
  setup() {
    return {};
  },
};
</script>

<style>
.footer {
  position: static;
}
</style>
