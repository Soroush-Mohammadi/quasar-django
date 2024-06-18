<template>
  <div>
    <svg-icon
      class="q-ml-lg"
      type="mdi"
      :path="account"
      style="color: white"
    ></svg-icon>
    <svg-icon
      class="q-ml-lg"
      type="mdi"
      :path="cart"
      style="color: white"
    ></svg-icon>
    <svg-icon
      class="q-ml-lg"
      type="mdi"
      :path="heart"
      style="color: white"
    ></svg-icon>
  </div>
</template>

<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import { defineComponent } from "vue";

import { mdiAccount } from "@mdi/js";
import { mdiCart } from "@mdi/js";
import { mdiHeart } from "@mdi/js";

defineComponent({
  name: "widget-bar",
});

const account = mdiAccount;
const cart = mdiCart;
const heart = mdiHeart;
</script>
