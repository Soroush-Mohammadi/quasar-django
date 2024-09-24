<template>
  <div class="flex justify-center">
    <div
      v-if="category"
      style="width: 80vw"
      class="row q-col-gutter-md justify-around items-center"
    >
      <div class="col-4" v-for="cat in category" :key="cat.id">
        <RouterLink :to="`/${cat.category_id.name}/${removeSpace(cat.name)}`">
          <q-card class="row items-center justify-around">
            <div class="col-5">
              <div v-if="cat.image">
                <q-img
                  :src="`${baseUrl}${cat.image.image_url}`"
                  style="max-width: 200px"
                />
              </div>
            </div>
            <div class="col-5">
              <q-card-section
                ><h5>{{ cat.name }}</h5></q-card-section
              >
              <q-card-section> {{ cat.description }} </q-card-section>
              <q-card-section> {{ cat.price }} </q-card-section>
            </div>
          </q-card>
        </RouterLink>
      </div>
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
        console.log(category.value);
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
