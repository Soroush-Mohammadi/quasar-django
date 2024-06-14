import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useProductsServer = defineStore("Products", () => {
  const products = ref([]);
  async function getProducts() {
    const url = "http://localhost:3000/products";

    try {
      const response = await axios.get(url);
      products.value = response.data;
    } catch (error) {
      console.log("Error", error);
    }
  }

  return { products, getProducts };
});
