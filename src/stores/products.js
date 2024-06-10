import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

export const useProductStore = defineStore("Products", () => {
  let products = ref([]);
  async function getProducts() {
    const url = "https://fakestoreapi.com/products";

    try {
      const response = await axios.get(url);

      products.value = response.data;
    } catch (error) {
      console.log("Error fetching data", error);
    }
  }

  const reduceProducts = computed(() => products.value.slice(0, 4));

  return { products, getProducts, reduceProducts };
});
