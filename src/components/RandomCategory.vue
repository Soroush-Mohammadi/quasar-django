<template>
  <div class="flex justify-center" v-show="category">
    <div
      style="width: 80vw"
      class="row q-col-gutter-md justify-around items-center"
    >
      <div class="col-4" v-for="cat in category" :key="cat.id">
        <RouterLink
          style="text-decoration: none"
          :to="`/${removeSpace(cat.category_id.name)}/${removeSpace(cat.name)}`"
        >
          <q-card
            class="row items-center justify-between q-pa-md q-mb-md q-hoverable q-card-shadow"
            style="border-radius: 16px; transition: transform 0.3s"
          >
            <div class="col-5 flex flex-center">
              <q-img
                v-if="cat.image"
                :src="`${baseUrl}${cat.image.image_url}`"
                style="
                  max-width: 180px;
                  border-radius: 12px;
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                "
              />
            </div>

            <div class="col-7 q-pl-md">
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
            </div>
          </q-card>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, computed, onMounted } from "vue";
import { useSpaceRemover } from "../composables/useSpaceRemover";
import { useProductStore } from "../stores/productStore";

export default {
  props: {
    card: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const products = ref(props.card.products);
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

    watch(
      () => props.card.products,
      (newVal) => {
        if (newVal) {
          products.value = newVal;
        }
      }
    );

    const { removeSpace } = useSpaceRemover();

    return {
      products,
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
