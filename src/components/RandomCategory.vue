<template>
  <div v-if="randomCategories" class="bg-red-2 flex column items-center">
    <div v-if="findCategory" class="col text-center q-ma-lg">
      <div v-if="categoryTitle" class="text-h4 text-weight-thick">title</div>
      <div class="text-subtitle1 text-weight-light q-mt-xs">
        CategorySubtitle
      </div>
    </div>
    <div
      class="row bg-blue justify-center"
      style="max-width: 70vw"
      v-if="products"
    >
      <RouterLink v-for="cat in category" :key="cat.id">
        <q-card class="q-ma-lg" style="max-width: 300px">
          <div v-if="cat.image">
            <q-img :src="`${baseUrl}${cat.image.image_url}`" />
          </div>
          <q-card-section>
            <div class="text-h6">{{ cat.name }}</div>
          </q-card-section>
          <q-card-section> {{ cat.description }} </q-card-section>
          <q-card-section> {{ cat.price }} </q-card-section>
        </q-card>
      </RouterLink>
    </div>
    <div v-else>
      <p>Loading.....</p>
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
