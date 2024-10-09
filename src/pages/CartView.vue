<template>
  <ul class="row bg-white flex-center">
    <div class="col-xs-12 bg-blue">
      <h5>Shop Cart</h5>
    </div>
    <div class="col-xs-12 col-md-8 bg-teal-2 offset-md-2">
      <li
        v-for="item in cart"
        :key="item.id"
        class="q-pa-md row justify-center items-center"
      >
        <div class="col-xs-12 col-lg-3 flex justify-center bg-cyan-1">
          <img
            :src="`${baseUrl}${item.image}`"
            alt=""
            style="border: 1px solid black; width: 100%"
          />
        </div>
        <div
          class="q-px-md flex justify-center items-center col-xs-12 col-lg-3 bg-cyan-2"
        >
          <h5 class="q-px-sm lt-md">Title :</h5>
          <h6>{{ item.name }}</h6>
        </div>

        <div
          class="col-xs-12 col-lg-3 flex justify-center items-center bg-cyan-1"
        >
          <h5>Price :</h5>
          <h6 class="q-mx-md">{{ item.totalPrice }}$</h6>
        </div>
        <div class="col-xs-12 col-md-5 col-lg-3 flex justify-around bg-cyan-1">
          <q-btn
            style="width: 100px"
            @click="removeItemFromCart(item)"
            class="q-px-md"
            color="red-7"
            >-</q-btn
          >
          <span>{{ item.quantity }}</span>
          <q-btn
            color="green-7"
            style="width: 100px"
            @click="addToCart(item)"
            class="q-px-md"
            >+</q-btn
          >
        </div>
      </li>
    </div>
    <hr />
    <div class="col-xs-12 col-md-8 bg-green q-pa-md">
      <li class="items-center col" style="list-style: none; width: 100%">
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
    </div>
  </ul>
</template>

<script>
import { storeToRefs } from "pinia";
import { useCartStore } from "../stores/cartStore";
import { useUserStore } from "../stores/userStore";
import { computed } from "vue";
import { useRouter } from "vue-router";

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

    const router = useRouter();

    const { addToCart, totalPrice } = store;

    const removeItemFromCart = (item) => {
      store.removeFromCart(item);
    };

    const getFromStorage = computed(() =>
      JSON.parse(localStorage.getItem("cart" || []))
    );

    const baseUrl = "https://onlineshop-parhams-projects-41827abc.vercel.app/";

    const userAuth = () =>
      user ? router.push("/checkout") : router.push("/login");

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
