<template>
  <q-page v-if="category">
    <div
      class="row justify-evenly"
      v-for="(items, key) in filteredKeys"
      :key="key"
    >
      <div class="col-12 text-h6 text-bold text-center bg-primary text-white">
        {{ key }}
      </div>

      <div
        class="col-sm-5 col-md-4 col-lg-2 q-my-xl"
        v-for="(product, index) in items"
        :key="index"
      >
        <RouterLink
          style="text-decoration: none"
          :to="`${removeSpace(product.category_id.name)}/${removeSpace(
            product.name
          )}`"
        >
          <q-card
            class="q-pa-sm q-hoverable q-card-shadow"
            style="
              border-radius: 12px;
              transition: transform 0.3s;
              max-width: 300px;
            "
          >
            <div class="q-gutter-md text-center">
              <div v-if="product.image">
                <q-img
                  :src="`${baseUrl}${product.image.image_url}`"
                  style="
                    max-width: 100px;
                    max-height: 100px;
                    object-fit: cover;
                    border-radius: 8px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                  "
                />
              </div>
              <div class="text-h6 text-primary q-mb-xs">{{ product.name }}</div>
              <div class="text-body2 text-grey-7 q-mb-xs">
                {{ product.description }}
              </div>
              <q-badge
                color="green-6"
                :label="`Price${product.price}$`"
                class="q-mt-md"
                style="font-size: 1em"
              />
            </div>
          </q-card>
        </RouterLink>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
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
    category.value = data.value;
  } catch (error) {
    console.error("faild", error);
  }
}

const store = useProductStore();
const { parhamData } = store;

onMounted(() => getData());

const { removeSpace } = useSpaceRemover();
</script>
