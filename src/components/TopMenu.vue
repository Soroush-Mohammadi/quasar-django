<template>
  <q-menu>
    <q-list style="min-width: 300px">
      <q-item
        clickable
        v-close-popup
        v-for="menu in menues"
        v-bind:key="menu.name"
      >
        <q-item-section> {{ menu.name }}</q-item-section>
      </q-item>
      <q-separator />
    </q-list>
  </q-menu>
</template>

<script setup>
import { useProductStore } from "../stores/products";
import { storeToRefs } from "pinia";

const store = useProductStore();

const { categories: menues } = storeToRefs(store);
</script>
