<template>
  <div class="flex justify-between">
    <!-- <q-img :src="user.image"></q-img>
    <span>{{ user.name }}</span> -->
    {{ user.username }}
  </div>
</template>

<script setup>
import { useUserStore } from "../stores/userStore";

const store = useUserStore();
const { user } = store;
</script>
