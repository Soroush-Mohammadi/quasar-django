<template>
  <div class="row justify-center items-center q-ma-lg">
    <q-card
      class="my-card"
      style="width: 80vw; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)"
    >
      <q-item v-if="selectedProduct">
        <q-card-section
          horizontal
          class="bg-red col"
          style="border-radius: 8px"
        >
          <q-img
            :src="selectedProduct.imageUrl"
            style="border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)"
          />
        </q-card-section>
        <q-card-section class="col">
          <q-card-section>
            <div class="text-h3" style="font-weight: bold; color: #333">
              {{ selectedProduct.name }}
            </div>
            <p class="text-h5" style="color: #666">
              {{ selectedProduct.description }}
            </p>
            <p class="text-h5" style="color: #666">
              {{ selectedProduct.price }}
            </p>
          </q-card-section>
          <q-card-actions>
            <q-btn color="primary" size="md" style="border-radius: 20px"
              >Click Me</q-btn
            >
          </q-card-actions>
        </q-card-section>
        <!-- Display other details of the selected product as needed -->
      </q-item>
      <q-item v-else>
        <p>Loading product...</p>
      </q-item>
    </q-card>
  </div>
</template>

<script>
import { ref, watch } from "vue";

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
    };
  },
};
</script>
