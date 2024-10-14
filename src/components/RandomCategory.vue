<template>
  <div class="flex justify-center" v-show="category">
    <div
      style="width: 80vw"
      class="row q-col-gutter-md justify-around items-center"
    >
      <div
        class="col-sm-10 col-md-4 col-lg-2"
        v-for="cat in category"
        :key="cat.id"
        style="max-width: 300px; max-height: 400px"
      >
        <RouterLink
          style="text-decoration: none"
          :to="`/${removeSpace(cat.category_id.name)}/${removeSpace(cat.name)}`"
        >
          <q-card
            class="flex column items-center q-pa-md q-mb-md q-hoverable q-card-shadow"
            style="border-radius: 16px; transition: transform 0.3s"
          >
            <q-img
              v-if="cat.image"
              :src="`${baseUrl}${cat.image.image_url}`"
              style="
                max-width: 100px;
                border-radius: 12px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              "
            />

            <q-card-section class="text-left">
              <h5 class="text-primary q-mb-none">{{ cat.name }}</h5>
              <p class="text-body2 text-grey-8 q-mt-xs">
                {{ cat.description }}
              </p>
              <q-badge
                color="green-6"
                :label="`Price : ${cat.price}$`"
                class="q-mt-md"
                style="font-size: 1.2em"
              />
            </q-card-section>
          </q-card>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useSpaceRemover } from "../composables/useSpaceRemover";
import { useProductStore } from "../stores/productStore";

export default {
  setup() {
    const store = useProductStore();
    const { parhamData } = store;

    const baseUrl = "https://onlineshop-parhams-projects-41827abc.vercel.app";
    const randomCategories = ref([]);
    const category = ref([]);
    const findCategory = ref("");

    async function getData() {
      try {
        randomCategories.value = await parhamData();
        category.value = randomCategories.value["product_category_random"];
      } catch (error) {
        console.error("faild", error);
      }
    }

    onMounted(() => getData());

    const { removeSpace } = useSpaceRemover();

    return {
      removeSpace,
      randomCategories,
      baseUrl,
      category,
      findCategory,
      getData,
    };
  },
};
</script>
