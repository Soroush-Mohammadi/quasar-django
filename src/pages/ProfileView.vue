<template>
  <q-page class="bg-white">
    <div class="row justify-center bg-cyan-5 q-my-md">
      <div class="col-2 bg-lime-3">
        <q-list>
          <q-item v-for="item in UserMenu" :key="item">
            <q-item-section> {{ item }}</q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="col-5 bg-amber-4">
        <div class="row q-pa-sm">
          <div class="col-12 b bg-light-blue-1">
            <p class="text-body1 text-weight-medium">Profile Picture</p>
          </div>
          <div class="col-12">
            <p class="text-body1 text-weight-medium bg-light-green-3">
              User Information
            </p>
          </div>
          <div class="col-12">
            <p class="text-body1 text-weight-medium bg-light-green-3">
              Addresses
            </p>
          </div>
          <div class="col-12">
            <p class="text-body1 text-weight-medium bg-red-6">Recent Orders</p>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
const UserMenu = [
  "orders",
  "WishList",
  "Cart",
  "Account Information",
  "Payment Methods",
  "Addresses",
  "Security Settings",
  "Logout",
];
</script>
