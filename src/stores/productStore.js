import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useSpaceRemover } from "../composables/useSpaceRemover";
import axios from "axios";

export const useProductStore = defineStore("Products", () => {
  const products = ref([]);
  const parhamProducts = ref([]);

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

  const findCategorybyName = async (category) => {
    let getCat = ref({});
    getCat.value = await products.value.find(
      (cat) => cat.category === category
    );
    console.log(getCat.value.category);
    return getCat;
  };

  async function parhamData() {
    const url = "https://onlineshop-parhams-projects-41827abc.vercel.app/main";

    try {
      const response = await axios.get(url);
      return response.data; // Return the data directly
    } catch (error) {
      console.log("Error", error);
      throw error; // Optionally re-throw the error so it can be handled by the caller
    }
  }

  return {
    products,
    getProducts,
    findProduct,
    banner,
    findCategorybyName,
    parhamData,
    parhamProducts,
  };
});
