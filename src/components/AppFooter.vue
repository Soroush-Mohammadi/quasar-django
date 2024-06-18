<template>
  <div
    class="row bg-blue-2 justify-between"
    style="min-height: 20vh; width: 95vw"
  >
    <div class="col-2" v-for="(nav, index) in navigations" :key="nav">
      <q-item v-if="index == 0">
        <Logo />
      </q-item>
      <q-list>
        <q-item v-for="link in nav.links" :key="link">
          <q-item-section>
            {{ link }}
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script setup>
import Logo from "../components/logo.vue";
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
    title: "About Our Companey",
    links: [
      "About Us",
      "Careers ",
      "Press/Media ",
      "Shipping Information",
      "Blog ",
    ],
  },
  {
    title: "Legal Information",
    links: [
      "Privacy Policy",
      "Terms of Service ",
      "Press/Media ",
      " Cookie Policy",
    ],
  },
]);
</script>
