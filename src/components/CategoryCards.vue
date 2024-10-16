<template>
  <div class="row full-width justify-center">
    <div v-if="categories" class="row wrap justify-center">
      <div
        class="col-xs-10 col-sm-4 col-md-2 q-ma-md justify-center"
        v-for="item in images"
        :key="item"
      >
        <RouterLink
          :to="`/${removeSpace(item.name)}`"
          style="text-decoration: none"
        >
          <q-card
            class="my-card flex column items-center justify-around bg-primary"
            style="min-height: 280px"
          >
            <img
              :src="`${baseUrl}${item.image}`"
              alt=""
              style="max-height: 200px"
            />
            <span class="q-my-md text-bold q-pa-xs text-white text-body1">
              {{ item.name }}
            </span>
          </q-card>
        </RouterLink>
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
