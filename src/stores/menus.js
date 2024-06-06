import { defineStore } from "pinia";
import { menuData } from "../data/data";
import { ref } from "vue";

export const useMenuStore = defineStore("products", () => {
  const menus = ref(menuData);

  return { menus };
});
