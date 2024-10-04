<template>
  <div class="row justify-center q-my-xl">
    <div
      class="col-12 col-md-10 col-lg-6 col-xl-5 bg-white q-pa-md"
      style="border-radius: 10px"
      v-if="cart"
    >
      <div class="row">
        <ul class="col flex column items-center">
          <h5>Shop Cart</h5>
          <li
            v-for="item in cart"
            :key="item.id"
            class="q-pa-md cart-item bg-teal-1"
          >
            <div class="flex items-center justify-between" style="gap: 10px">
              <div>
                <img
                  :src="`${baseUrl}${item.image}`"
                  alt=""
                  style="max-width: 150px; border: 1px solid black"
                />
              </div>
              <div style="width: 200px" class="q-px-md">
                <h5>{{ item.name }}</h5>
              </div>

              <div
                style="width: 200px"
                class="flex justify-center items-center"
              >
                <h5>Price :</h5>
                <h6 class="q-mx-md">{{ item.totalPrice }}$</h6>
              </div>
              <div class="flex justify-between" style="width: 80px">
                <button @click="removeItemFromCart(item)">-</button>
                <span>{{ item.quantity }}</span>
                <button @click="addToCart(item)">+</button>
              </div>
            </div>
          </li>
          <hr />
          <li class="items-center" style="list-style: none; width: 100%">
            <h3>Total Price :</h3>
            <h6>{{ store.calculateTotal() }}$</h6>
            <div class="flex justify-evenly">
              <q-btn
                size="xl"
                color="teal-7"
                style="width: 100%; border-radius: 10px"
                @click="userAuth"
                >checkout</q-btn
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { useCartStore } from "../stores/cartStore";
import { useUserStore } from "../stores/userStore";
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
    const userStore = useUserStore();
    const { user } = userStore;

    const { addToCart, totalPrice } = store;

    const removeItemFromCart = (item) => {
      store.removeFromCart(item);
    };

    const getFromStorage = computed(() =>
      JSON.parse(localStorage.getItem("cart" || []))
    );

    const baseUrl = "https://onlineshop-parhams-projects-41827abc.vercel.app/";

    const userAuth = () => console.log(user);

    return {
      cart,
      addToCart,
      getFromStorage,
      baseUrl,
      totalPrice,
      removeItemFromCart,
      store,
      userAuth,
      user,
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
  margin-bottom: 20px;
  border-radius: 10px;
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
