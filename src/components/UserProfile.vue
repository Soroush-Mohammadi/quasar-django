<template>
  <div
    class="row justify-center items-center q-col-gutter-md q-my-xs"
    style="list-style: none"
  >
    <div class="col-7 flex items-center justify-between">
      <span>
        <slot></slot>
      </span>
      <span class="q-mx-xs"> Name : </span>
    </div>
    <div class="col-5">
      <span>
        {{ user.username }}
      </span>
    </div>
    <div class="col-12 flex justify-start">
      <span class="q-mx-lg"> Logout </span>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "../stores/userStore";

const store = useUserStore();
const { user } = store;
</script>
