<template>
  <q-btn color="white" label="categories" flat unelevated>
    <slot name="icon"></slot>
    <q-menu>
      <q-list>
        <q-item
          class="bg-teal-2"
          clickable
          v-close-popup
          v-for="menu in images"
          :key="menu"
        >
          <q-item-section class="q-mr-md col">{{ menu.name }}</q-item-section>
        </q-item>
        <q-separator />
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useProductStore } from "../stores/productStore";
const store = useProductStore();
const { parhamData } = store;

const categories = ref({});
const images = ref([]);
const baseUrl = "https://onlineshop-parhams-projects-41827abc.vercel.app/";
onMounted(async () => {
  try {
    categories.value = await parhamData();
    images.value = categories.value["categories_image"];
    console.log(images.value, "from categoru");
  } catch (error) {
    console.error("faild", error);
  }
});
</script>
