<template>
  <div class="row justify-center">
    <div class="col-2 q-pt-xl" v-if="navigations.length">
      <AppLogo class="logo" />
    </div>
    <div class="col" v-for="nav in navigations" :key="nav.title">
      <h6 class="text-xl font-bold">{{ nav.title }}</h6>
      <q-list>
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
    links: [
      "Customer Service",
      "Help Center",
      "Returns & Exchanges",
      "Shipping Information",
      "Order Tracking",
    ],
  },
  {
    title: "About Our Company",
    links: [
      "About Us",
      "Careers",
      "Press/Media",
      "Shipping Information",
      "Blog",
    ],
  },
  {
    title: "Legal Information",
    links: [
      "Privacy Policy",
      "Terms of Service",
      "Press/Media",
      "Cookie Policy",
    ],
  },
]);
</script>

<style></style>
