<template>
  <div class="row full-width justify-center">
    <div v-if="categories" class="row wrap justify-center">
      <div
        class="col-2 q-ma-md flex justify-center"
        v-for="item in images"
        :key="item"
      >
        <q-card class="my-card column items-center">
          <img
            :src="`${baseUrl}${item.image}`"
            alt=""
            style="max-width: 200px"
          />
          <span class="q-mt-md">
            {{ item.name }}
          </span>
        </q-card>
      </div>
    </div>
    <div v-else>Loading Data ...</div>
  </div>
</template>

<script>
import { useSpaceRemover } from "../composables/useSpaceRemover";
import { useProductStore } from "../stores/productStore";
import { ref, onMounted } from "vue";

export default {
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const store = useProductStore();
    const { removeSpace } = useSpaceRemover();
    const { parhamData } = store;
    const baseUrl = "https://onlineshop-parhams-projects-41827abc.vercel.app";

    let categories = ref([]);
    let images = ref([]);

    onMounted(async () => {
      try {
        categories.value = await parhamData();
        images.value = categories.value["categories_image"];
      } catch (error) {
        console.error("faild", error);
      }
    });

    return { removeSpace, parhamData, categories, images, baseUrl };
  },
};
</script>
