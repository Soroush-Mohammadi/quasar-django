<template>
  <div class="row justify-center items-center q-ma-lg">
    <q-card
      class="my-card q-my-xl"
      style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)"
    >
      <div v-if="productRandom && productRandom.image" class="row">
        <q-card-section class="col-3">
          <img
            :src="`${baseUrl}${productRandom.image.image_url}`"
            alt=""
            style="max-width: 300px"
          />
        </q-card-section>
        <q-card-section class="col">
          <div class="text-h3" style="font-weight: bold; color: #333">
            {{ productRandom.name }}
          </div>
          <p class="text-h5 q-my-lg" style="color: #666">
            {{ productRandom.description }}
          </p>
          <p class="text-h5 q-my-lg" style="color: #666">
            {{ productRandom.price }}
          </p>
        </q-card-section>
        <q-card-actions class="col">
          <q-btn color="primary" size="lg">Click Me</q-btn>
        </q-card-actions>

        <!-- Display other details of the selected product as needed -->
      </div>
      <div v-else>
        <p>Loading product...</p>
      </div>
    </q-card>
  </div>
</template>

<script>
import { ref, watch, onMounted, computed } from "vue";
import { useProductStore } from "../stores/productStore";

export default {
  props: {
    card: {
      type: Object,
      default: () => ({}),
    },

    categories: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const products = ref(props.card.products);
    const selectedProduct = ref(null);
    const store = useProductStore();
    const { parhamData } = store;

    const data = ref([]);
    const productRandom = ref([]);
    const baseUrl = "https://onlineshop-parhams-projects-41827abc.vercel.app";
    const src = ref("");

    onMounted(async () => {
      try {
        data.value = await parhamData();
        productRandom.value = data.value["product_random"];
      } catch (error) {
        console.log("faild", error);
      }
    });

    watch(
      () => productRandom.value,
      (newVal) => console.log(newVal)
    );

    watch(
      () => props.card.products,
      (newVal) => {
        if (newVal) {
          products.value = newVal;
          selectRandomProduct();
        }
      }
    );

    const selectRandomProduct = () => {
      if (products.value && products.value.length > 0) {
        const randomIndex = Math.floor(Math.random() * products.value.length);
        selectedProduct.value = products.value[randomIndex];
      }
    };

    selectRandomProduct();

    return {
      products,
      selectedProduct,
      selectRandomProduct,
      productRandom,
      data,
      baseUrl,
      src,
    };
  },
};
</script>
