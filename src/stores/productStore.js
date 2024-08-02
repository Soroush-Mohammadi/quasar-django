import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

export const useProductStore = defineStore("Products", () => {
  const products = ref([]);

  async function getProducts() {
    const url = "http://localhost:3000/";

    try {
      const response = await axios.get(url);
      products.value = response.data;
    } catch (error) {
      console.log("Error", error);
    }
  }

  const banner = computed(() => {
    const cards = [];
    for (var i = 0; i < 3; i++) {
      const num = Math.floor(Math.random() * products.value.length);
      cards.push(products.value[num]);
    }

    return cards;
  });

  const findProduct = computed(() => {
    const num = Math.floor(Math.random() * products.value.length);
    return products.value[num];
  });

  return { products, getProducts, findProduct, banner };
});
