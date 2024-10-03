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
          <RouterLink
            :to="removeSpace(menu.name)"
            style="text-decoration: none"
          >
            <q-item-section class="q-mr-md col">{{ menu.name }}</q-item-section>
          </RouterLink>
        </q-item>
        <q-separator />
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useProductStore } from "../stores/productStore";
import { useSpaceRemover } from "../composables/useSpaceRemover";
const store = useProductStore();
const { parhamData } = store;

const { removeSpace } = useSpaceRemover();

const categories = ref({});
const images = ref([]);
const baseUrl = "https://onlineshop-parhams-projects-41827abc.vercel.app/";
onMounted(async () => {
  try {
    categories.value = await parhamData();
    images.value = categories.value["categories_image"];
  } catch (error) {
    console.error("faild", error);
  }
});
</script>
