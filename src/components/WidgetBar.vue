<template>
  <div class="row items-center justify-center" style="gap: 10px">
    <div v-if="user">
      <UserProfile />
    </div>
    <div
      v-else
      class="bg-blue-10 col-4 flex q-pa-md"
      style="border-radius: 10px"
    >
      <RouterLink to="/login">
        <svg-icon
          class="q-ml-lg"
          type="mdi"
          :path="account"
          style="color: white"
          size="25px"
        ></svg-icon>
      </RouterLink>
    </div>

    <div
      class="container col-4 bg-green-10 flex justify-center q-pa-md"
      style="border-radius: 10px"
    >
      <RouterLink to="/cart">
        <svg-icon
          class="order-last"
          type="mdi"
          :path="cart"
          color="white"
          size="25px"
        ></svg-icon>

        <q-badge
          color="orange"
          text-color="black"
          :label="productNumber"
          class="badge"
        />
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import UserProfile from "./UserProfile.vue";

import SvgIcon from "@jamescoyle/vue-icon";
import { defineComponent, computed } from "vue";
import { useCartStore } from "../stores/cartStore";
import { useUserStore } from "../stores/userStore";

import { mdiAccount } from "@mdi/js";
import { mdiCart } from "@mdi/js";
import { mdiHeart } from "@mdi/js";
import { storeToRefs } from "pinia";

const store = useCartStore();
const { cart: cartStore } = storeToRefs(store);
const userStore = useUserStore();
const { user } = userStore;

const productNumber = computed(() => cartStore.value.length);

defineComponent({
  name: "widget-bar",
});

const account = mdiAccount;
const cart = mdiCart;
const heart = mdiHeart;
</script>

<style>
.badge {
  position: absolute;
}
</style>
