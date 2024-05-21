import { defineStore } from "pinia";
import { productCategories } from "../data/data";
import { ref } from "vue";

export const useProductStore = defineStore("products", () => {
  const categories = ref(productCategories);

  return { categories };
});
