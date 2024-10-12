<template>
  <q-list bordered separator>
    <RouterLink to="/profile" style="text-decoration: none">
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
    </RouterLink>

    <q-item clickable v-ripple @click="logout">
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

const store = useUserStore();
const { user } = store;

const logout = () => {
  user.username = "";
  user.password = "";
  localStorage.removeItem("user");
};
</script>

<style></style>
