<template>
  <div class="flex">
    <div v-if="user">
      <UserProfile />
    </div>
    <div v-else>
      <RouterLink to="/login">
        <svg-icon
          class="q-ml-lg"
          type="mdi"
          :path="account"
          style="color: white"
        ></svg-icon>
      </RouterLink>
    </div>

    <RouterLink to="/cart">
      <div class="container q-ml-lg">
        <svg-icon
          class="order-last"
          type="mdi"
          :path="cart"
          style="color: white; position: relative"
        ></svg-icon>
        <q-badge
          color="orange"
          text-color="black"
          :label="productNumber"
          class="badge"
        />
      </div>
    </RouterLink>
    <svg-icon
      class="q-ml-lg"
      type="mdi"
      :path="heart"
      style="color: white"
    ></svg-icon>
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
