<template>
  <div>
    <q-toolbar class="bg-primary text-white">
      <!-- <div>
        <slot name="title" />
      </div> -->
      {{ categoryTitle[6] }}
      <q-space />
    </q-toolbar>
    <div class="row justify-center">
      <RouterLink v-for="product in category" :key="product">
        <q-card class="my-card q-ma-md flex column items-center" flat bordered>
          <div v-if="product.image">
            <img
              :src="`${baseUrl}${product.image.image_url}`"
              style="max-width: 150px"
            />
          </div>

          <q-card-section>
            <div class="text-overline text-blue">
              <span class="q-mr-md">Price:</span>{{ `${product.price}$` }}
            </div>
            <div class="text-h5 q-mt-sm q-mb-xs">
              {{ product.name }}
            </div>
            <div class="text-caption text-grey">
              {{ product.description }}
            </div>
          </q-card-section>
        </q-card>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from "vue";
import { useSpaceRemover } from "../composables/useSpaceRemover";
import { useProductStore } from "../stores/productStore";

// doroste ?
const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },

  cat: {
    type: String,
    required: true,
  },
});

const category = ref([]);
const baseUrl = "https://onlineshop-parhams-projects-41827abc.vercel.app";
let categoryTitle = ref([]);

async function getData() {
  try {
    const data = await parhamData();
    category.value = data["highest_price_products"];
    categoryTitle.value = Object.keys(data);
    console.log(categoryTitle.value, "test");
  } catch (error) {
    console.error("faild", error);
  }
}

const store = useProductStore();
const { parhamData } = store;

onMounted(() => getData());

const exert = (text, char) => text.slice(0, char);

const { removeSpace } = useSpaceRemover();
</script>
