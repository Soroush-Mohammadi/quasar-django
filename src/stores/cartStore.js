import { defineStore } from "pinia";
import { ref, computed } from "vue";
export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);

  const addToCart = (item) => {
    const product = cart.value.find((product) => product.name === item.name);
    if (!product) {
      // Initialize the quantity and total price for the new item
      cart.value.push({ ...item, quantity: 1, totalPrice: item.price });
      console.log(cart.value);
    } else {
      // Only increment the quantity and update the total price accordingly
      product.quantity++;
      product.totalPrice = product.price * product.quantity;
    }
    localStorage.setItem("cart", JSON.stringify(cart.value));
  };

  const loadCart = () => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      cart.value = JSON.parse(storedCart);
    }
  };

  const removeFromCart = (item) => {
    const product = cart.value.find((product) => product.upc === item.upc);

    if (product) {
      if (product.quantity === 1) {
        // Remove the product if quantity is 1
        cart.value = cart.value.filter((product) => product.upc !== item.upc);
      } else {
        // Decrease quantity and update total price
        product.quantity--;
        product.totalPrice = product.price * product.quantity;
      }
    }

    localStorage.setItem("cart", JSON.stringify(cart.value));
  };

  return {
    removeFromCart,
    cart,
    addToCart,
    loadCart,
  };
});
