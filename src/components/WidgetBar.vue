<template>
  <div class="row items-center justify-center" style="gap: 10px">
    <div v-if="user.username">
      <q-btn
        class="bg-blue-10 q-py-sm col-auto flex justify-center"
        style="border-radius: 10px; width: 50px"
      >
        <svg-icon
          type="mdi"
          :path="account"
          style="color: white"
          size="26px"
          class="q-my-auto"
        ></svg-icon>
        <q-menu>
          <q-list style="min-width: 100px" class="text-black">
            <q-item clickable v-close-popup>
              <q-item-section>
                <UserProfile>
                  <template v-slot:userIcon>
                    <svg-icon
                      type="mdi"
                      :path="account"
                      style="color: black"
                      size="25px"
                    ></svg-icon>
                  </template>
                  <template v-slot:userLogout>
                    <svg-icon
                      type="mdi"
                      :path="logout"
                      style="color: black"
                      size="20px"
                    ></svg-icon>
                  </template>
                </UserProfile>
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
    <div
      v-else
      class="bg-blue-10 col-auto q-py-sm"
      style="width: 50px; border-radius: 10px; text-align: center"
    >
      <RouterLink to="/login">
        <svg-icon
          type="mdi"
          color="white"
          :path="account"
          size="20px"
        ></svg-icon>
      </RouterLink>
    </div>

    <div
      class="col-auto bg-green-10 flex justify-center q-py-sm"
      style="border-radius: 10px; width: 50px"
    >
      <RouterLink to="/cart">
        <svg-icon
          class="order-last menu-btn"
          type="mdi"
          :path="cart"
          color="white"
          size="20px"
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
import { defineComponent, computed, watch } from "vue";
import { useCartStore } from "../stores/cartStore";
import { useUserStore } from "../stores/userStore";

import { mdiAccount, mdiCart, mdiHeart, mdiLogout } from "@mdi/js";

import { storeToRefs } from "pinia";

const store = useCartStore();
const { cart: cartStore } = storeToRefs(store);
const userStore = useUserStore();
const { user } = userStore;

watch(user, (val) => console.log(val.value), { immediate: true });

const productNumber = computed(() => cartStore.value.length);

defineComponent({
  name: "widget-bar",
});

const account = mdiAccount;
const cart = mdiCart;
const heart = mdiHeart;
const logout = mdiLogout;
</script>

<style>
.badge {
  position: absolute;
}

@media (min-width: 600px) and (max-width: 1023px) {
}
</style>
