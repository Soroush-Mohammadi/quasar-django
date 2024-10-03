<template>
  <div class="container">
    <div class="row" v-for="item in cart" :key="item">
      <div class="col">{{ item.image }}</div>
      <div class="col">{{ item.price }}</div>
      <div class="col">{{ item.price }}</div>
      <div class="col">
        <button>-</button>{{ item.quantity }}<button>+</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineComponent({
  name: "shop-cart",
});
import { storeToRefs } from "pinia";
import useCartStore from "../stores/cartStore";
import { defineComponent } from "vue";

const store = useCartStore();
const { cart } = storeToRefs(store);

watch(cart, () => console.log(cart.value), { immediate: true });
</script>
