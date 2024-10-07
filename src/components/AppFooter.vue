<template>
  <div class="row justify-center">
    <div class="col-2 q-pt-xl" v-if="navigations.length">
      <AppLogo class="logo" />
    </div>
    <div class="col" v-for="nav in navigations" :key="nav.title">
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
import AppLogo from "../components/AppLogo.vue";
import { ref } from "vue";

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
</script>

<style></style>
