<template>
  <q-btn dense unelevated>
    <q-icon size="lg">
      <svg-icon type="mdi" color="black" :path="path"></svg-icon>
    </q-icon>
    <q-menu>
      <q-list>
        <q-item v-for="menu in images" :key="menu.name" clickable v-close-popup>
          <RouterLink
            :to="`/${removeSpace(menu.name)}`"
            style="text-decoration: none; width: 100%"
          >
            <q-item-section class="q-mr-md col">{{ menu.name }}</q-item-section>
          </RouterLink>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useProductStore } from "../stores/productStore";
import { useSpaceRemover } from "../composables/useSpaceRemover";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiMenu } from "@mdi/js";

const store = useProductStore();
const { parhamData } = store;

const { removeSpace } = useSpaceRemover();

const path = mdiMenu;

const categories = ref({});
const images = ref([]);

onMounted(async () => {
  try {
    categories.value = await parhamData();
    images.value = categories.value["categories_image"];
  } catch (error) {
    console.error("failed", error);
  }
});
</script>
