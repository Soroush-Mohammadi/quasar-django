<template>
  <div class="row justify-center items-center">
    <div class="col-2 q-pt-xl gt-md" v-if="navigations.length">
      <AppLogo class="logo" />
    </div>
    <div class="col-sm-12 lt-md flex justify-around items-center">
      <svg-icon
        v-for="(icon, index) in icons"
        :key="index"
        type="mdi"
        :path="icon"
        size="40px"
      ></svg-icon>
    </div>
    <div
      class="col-sm-3 col-lg-2 gt-sm"
      v-for="nav in navigations"
      :key="nav.title"
    >
      <div class="text-h5 q-my-lg">{{ nav.title }}</div>
      <q-list class="q-mb-md">
        <q-item
          v-for="link in nav.links"
          :key="link"
          class="footer-link hover:bg-teal-6 transition duration-300"
        >
          <q-item-section>
            {{ link }}
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import AppLogo from "../components/AppLogo.vue";
import { ref } from "vue";
import { mdiHome, mdiTable, mdiCart, mdiAccount } from "@mdi/js";

const navigations = ref([
  {
    title: "Get In Touch",
    links: ["Company Address", "Email Address", "Shipping Info"],
  },
  {
    title: "Customer Service",
    links: ["Customer Service", "Help Center", "Returns & Exchanges"],
  },
  {
    title: "About Our Company",
    links: ["About Us", "Careers", "Press/Media"],
  },
  {
    title: "Legal Information",
    links: ["Privacy Policy", "Terms of Service"],
  },
]);

const icons = ref([mdiHome, mdiTable, mdiCart, mdiAccount]);
</script>

<style></style>
