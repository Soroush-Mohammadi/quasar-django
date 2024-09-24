<template>
  <div v-if="category">
    <div
      class="row q-col-gutter-lg items-center justify-around q-my-md"
      v-for="(items, key) in filteredKeys"
      :key="key"
    >
      <div class="col-12 bg-blue">
        {{ key }}
      </div>
      <div class="col-2" v-for="(product, index) in items" :key="index">
        <div v-if="product.image">
          <img
            :src="`${baseUrl}${product.image.image_url}`"
            style="width: 200px"
          />
        </div>
        <div>
          {{ product.description }}
        </div>
        <div>
          {{ product.price }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref, computed } from "vue";
import { useSpaceRemover } from "../composables/useSpaceRemover";
import { useProductStore } from "../stores/productStore";

const category = ref([]);
const baseUrl = "https://onlineshop-parhams-projects-41827abc.vercel.app";
let data = ref([]);
const filterKeys = ref(["lowest_price_products", "highest_price_products"]);
("");
const filteredKeys = computed(() => {
  return Object.fromEntries(
    Object.entries(data.value).filter(([key]) => filterKeys.value.includes(key))
  );
});

async function getData() {
  try {
    data.value = await parhamData();
    console.log(typeof data.value);
    category.value = data.value;
    console.log(category.value);
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
