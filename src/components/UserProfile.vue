<template>
  <q-list bordered separator>
    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-icon>
          <slot name="userIcon"></slot>
        </q-icon>
      </q-item-section>
      <q-item-section>
        <span>
          {{ user.username }}
        </span>
      </q-item-section>
    </q-item>
    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-icon>
          <slot name="userLogout"></slot>
        </q-icon>
      </q-item-section>
      <q-item-section>
        <span> Logout </span>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup>
import { useUserStore } from "../stores/userStore";
import { ref } from "vue";

const store = useUserStore();
const { user } = store;
</script>

<style></style>
