<template>
  <div class="flex justify-center items-center q-ma-lg">
    <q-card class="my-card" style="width: 60vw; height: 40vh">
      <q-item v-if="selectedProduct">
        <q-card-section horizontal class="bg-red col">
          <q-img :src="selectedProduct.imageUrl" />
        </q-card-section>
        <q-card-section class="col">
          <q-card-section>
            <div class="text-h3">{{ selectedProduct.name }}</div>
            <p class="text-h5">{{ selectedProduct.description }}</p>
            <p class="text-h5">{{ selectedProduct.price }}</p>
          </q-card-section>
          <q-card-actions>
            <q-btn size="20px">click</q-btn>
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
