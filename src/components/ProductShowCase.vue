<template>
  <div class="row justify-center items-center q-ma-lg">
    <q-card
      class="q-pa-md q-my-xl q-card-shadow q-hoverable"
      style="
        border-radius: 16px;
        transition: transform 0.3s;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 1000px;
      "
    >
      <div v-if="productRandom && productRandom.image" class="row no-wrap">
        <!-- Image Section - Larger and Side-by-Side -->
        <q-card-section class="col-5 flex justify-center q-pa-md">
          <q-img
            :src="`${baseUrl}${productRandom.image.image_url}`"
            alt=""
            style="
              max-width: 100%;
              height: auto;
              border-radius: 12px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
            "
          />
        </q-card-section>

        <!-- Text and Details Section -->
        <q-card-section class="col-7 q-pa-lg">
          <div class="text-h3 text-bold q-mb-md" style="color: #333">
            {{ productRandom.name }}
          </div>
          <p class="text-body1 q-my-md" style="color: #666; line-height: 1.8">
            {{ productRandom.description }}
          </p>
          <p class="text-h5 q-my-md" style="color: #666">
            {{ productRandom.price }}
          </p>

          <!-- Action Button -->
          <q-card-actions align="left" class="q-pa-none q-mt-lg">
            <q-btn
              color="primary"
              size="xl"
              class="q-btn-rounded q-shadow-2 q-px-lg"
            >
              Click Me
            </q-btn>
          </q-card-actions>
        </q-card-section>
      </div>

      <!-- Loading State -->
      <div v-else class="text-center q-pa-md">
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
