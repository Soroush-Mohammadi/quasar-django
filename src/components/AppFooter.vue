<template>
  <div class="row justify-center items-center full-height">
    <div class="col-2 q-pt-xl gt-md hidden" v-if="navigations.length">
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
    <div class="col-12 gt-sm flex justify-evenly">
      <div class="row justify-center" style="width: 75%">
        <q-list class="col-6 flex">
          <q-item v-for="icon in SoicalIcons" :key="icon">
            <q-item-section>
              <svg-icon type="mdi" :path="icon" size="30px"> </svg-icon>
            </q-item-section>
          </q-item>
        </q-list>
        <div class="col">
          <AppLogo />
        </div>
        <div class="col-auto q-my-auto">
          <p class="text-body1 q-my-auto text-weight-medium">
            Your Style, Just a Click Away!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import AppLogo from "../components/AppLogo.vue";
import { useCartStore } from "../stores/cartStore";
import { computed, ref } from "vue";
import {
  mdiHome,
  mdiDownload,
  mdiCart,
  mdiAccount,
  mdiTwitter,
  mdiLinkedin,
  mdiFacebook,
  mdiGithub,
  mdiHandPeace,
  mdiBasketball,
} from "@mdi/js";
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

const SoicalIcons = ref([
  mdiTwitter,
  mdiLinkedin,
  mdiFacebook,
  mdiGithub,
  mdiHandPeace,
  mdiBasketball,
]);
</script>

<style></style>
