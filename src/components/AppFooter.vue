<template>
  <div class="row justify-center q-col-gutter-md footer">
    <div class="col-2" v-for="(nav, index) in navigations" :key="nav">
      <q-item v-if="index == 0">
        <AppLogo />
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

<style>
.footer {
  bottom: 0;
}
</style>
