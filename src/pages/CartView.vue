<template>
  <div class="cart">
    <h2>Your Shopping Cart</h2>
    <div v-if="cartItems.length === 0" class="empty-cart">
      <p>Your cart is empty.</p>
    </div>
    <ul v-else>
      <li v-for="item in cartItems" :key="item.id" class="cart-item">
        <img :src="item.image" :alt="item.name" class="cart-item-image" />
        <div class="cart-item-details">
          <h3>{{ item.name }}</h3>
          <p>Price: ${{ item.price.toFixed(2) }}</p>
          <label for="quantity">Quantity:</label>
          <input
            type="number"
            v-model="item.quantity"
            min="1"
            @change="updateQuantity(item)"
          />
          <button @click="removeFromCart(item.id)">Remove</button>
        </div>
      </li>
    </ul>
    <div v-if="cartItems.length > 0" class="cart-summary">
      <h3>Total: ${{ totalPrice.toFixed(2) }}</h3>
      <button @click="checkout">Checkout</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [
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
      ],
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
  methods: {
    updateQuantity(item) {
      if (item.quantity < 1) {
        item.quantity = 1;
      }
    },
    removeFromCart(itemId) {
      this.cartItems = this.cartItems.filter((item) => item.id !== itemId);
    },
    checkout() {
      alert("Proceeding to checkout!");
      // Add your checkout logic here
    },
  },
};
</script>

<style scoped>
.cart {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 600px;
  margin: auto;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.cart-item-image {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.cart-summary {
  margin-top: 20px;
}

.empty-cart {
  text-align: center;
  font-style: italic;
}
</style>
