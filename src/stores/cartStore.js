import { defineStore } from "pinia";
import { ref } from "vue";
export const useCartStore = defineStore("cart", () => {
  const cart = ref([
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      image: "https://via.placeholder.com/150",
      quantity: 1,
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
      image: "https://via.placeholder.com/150",
      quantity: 2,
    },
  ]);

  const addToCart = (item) => {
    this.cart.value.push(item);
  };

  const removeFromCart = (payload) => {
    const product = this.cart.value.find((item) => item.id == payload.id);
    this.carts.value.filter((item) => item.id == product.id);
  };

  return {
    addToCart,
    removeFromCart,
    cart,
  };
});
