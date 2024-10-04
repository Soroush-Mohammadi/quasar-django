<template>
  <div class="row justify-center q-my-xl">
    <div
      class="col-sm-12 col-md-9 col-lg-7 col-xl-6 bg-white q-pa-md flex justify-center"
    >
      <ul class="col-12">
        <h5>Shop Cart</h5>
        <li v-for="item in cart" :key="item.id" class="cart-item">
          <div
            class="flex justify-center q-pa-sm"
            style="border: 1px solid black"
          >
            <img :src="`${baseUrl}${item.image}`" alt="" style="width: 150px" />
          </div>
          <h5>{{ item.name }}</h5>
          <h5>Price :</h5>
          <h6 class="q-mx-md">{{ item.totalPrice }}$</h6>
          <div class="flex justify-between q-mx-md" style="min-width: 80px">
            <button @click="removeItemFromCart(item)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="addToCart(item)">+</button>
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
import { computed } from "vue";

export default {
  data() {
    return {};
  },
  computed: {
    // totalPrice() {
    //   return this.cartItems.reduce(
    //     (total, item) => total + item.price * item.quantity,
    //     0
    //   );
    // },
  },
  methods: {
    updateQuantity(item) {
      if (item.quantity < 1) {
        item.quantity = 1;
      }
    },

    // setProduct() {
    //   this.getCart();
    // },
    // removeFromCart(itemId) {
    //   this.cartItems = this.cartItems.filter((item) => item.id !== itemId);
    // },
    checkout() {
      alert("Proceeding to checkout!");
      // Add your checkout logic here
    },
  },

  // beforeRouteEnter(to, from, next) {
  //   next((vm) => vm.setProduct(JSON.parse(localStorage.getItem("cart" || []))));
  // },

  setup() {
    // just carts come from store
    const store = useCartStore();
    const { cart } = storeToRefs(store);
    const { addToCart, totalPrice } = store;

    const removeItemFromCart = (item) => {
      store.removeFromCart(item);
    };

    // const getCart = () => {
    //   store.loadCart();
    // };

    const getFromStorage = computed(() =>
      JSON.parse(localStorage.getItem("cart" || []))
    );

    const baseUrl = "https://onlineshop-parhams-projects-41827abc.vercel.app/";

    return {
      cart,
      addToCart,
      getFromStorage,
      baseUrl,
      totalPrice,
      removeItemFromCart,
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
