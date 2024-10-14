<template>
  <div class="row justify-center items-center">
    <div class="col-2 q-pt-xl gt-md" v-if="navigations.length">
      <AppLogo class="logo" />
    </div>
    <div class="col-12 lt-md flex justify-around">
      <RouterLink
        class="text-white"
        :to="icon.path"
        v-for="(icon, index) in icons"
        :key="index"
      >
        <div class="q-py-none">
          <div v-if="icon.name == mdiCart">
            <q-badge
              style="z-index: 1000"
              color="orange"
              text-color="black"
              :label="productNumber"
              class="badge"
            />
            <svg-icon type="mdi" :path="icon.name" size="40px"> </svg-icon>
          </div>
          <div v-else>
            <svg-icon type="mdi" :path="icon.name" size="40px"> </svg-icon>
          </div>
        </div>
      </RouterLink>
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
import { useCartStore } from "../stores/cartStore";
import { computed, ref } from "vue";
import { mdiHome, mdiDownload, mdiCart, mdiAccount } from "@mdi/js";
import { storeToRefs } from "pinia";

const store = useCartStore();
const { cart } = storeToRefs(store);

const productNumber = computed(() => cart.value.length);
const navigate = (val) => console.log(val);

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

const icons = ref([
  { name: mdiHome, path: "/" },
  { name: mdiDownload, path: "/download" },
  { name: mdiAccount, path: "/login" },
  { name: mdiCart, path: "/cart" },
]);
</script>

<style></style>
