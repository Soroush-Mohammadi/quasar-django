<template>
  <div class="row justify-center q-my-xl">
    <div
      class="col-md-8 col-lg-6 col-xl-5 bg-white q-pa-md flex justify-center"
    >
      <ul class="col-12">
        <h5>Shop Cart</h5>
        <li v-for="item in cart" :key="item.id" class="cart-item">
          <img :src="item.image" alt="" />
          <h5>{{ item.name }}</h5>
          <h6 class="q-mx-md">{{ item.price }}$</h6>
          <div class="flex justify-between q-mx-md" style="min-width: 80px">
            <button @click="removeProduct(item)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="addProduct(item)">+</button>
          </div>
        </li>
        <hr />
        <li
          class="bg-red flex items-center"
          style="list-style: none; width: 100%"
        >
          <h3>Total Price :</h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { useCartStore } from "../stores/cartStore";

export default {
  data() {
    return {};
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
    addProduct(product) {
      product.quantity++;
    },

    removeProduct(product) {
      console.log(product);
      if (product.quantity <= 1) {
        this.cartItems = this.cartItems.filter(
          (item) => item.id !== product.id
        );
      } else {
        product.quantity--;
      }
    },
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

  setup() {
    // just carts come from store
    const store = useCartStore();
    const { cart } = storeToRefs(store);
    return {
      cart,
    };
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
  background-color: #fff;
}

.cart-item {
  display: flex;
  gap: 40px;
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
