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
    cart.value.push(item);
  };

  const addProduct = (product) => {
    const findProduct = cart.value.find((item) => item.id === product.id);
    findProduct.quantity++;
  };

  const removeProduct = (product) => {
    console.log(product);
    if (product.quantity <= 1) {
      cart.value = cart.value.filter((item) => item.id !== product.id);
    } else {
      product.quantity--;
    }
  };

  return {
    addProduct,
    removeProduct,
    cart,
  };
});
