import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useCategoriesStore = defineStore("Categories", () => {
  const categories = ref([]);
  async function getCategories() {
    const url = "https://api.escuelajs.co/api/v1/categories";

    try {
      const response = await axios.get(url);
      console.log(response.data);
      categories.value = response.data;
    } catch (error) {
      console.log("Error", error);
    }
  }

  return { categories, getCategories };
});
