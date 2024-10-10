<template>
  <div class="row bg-white">
    <div class="col-xs-12 bg-blue">
      <h5 class="q-px-md">Shop Cart</h5>
    </div>
    <div class="col-xs-12 col-md-7 bg-teal-2">
      <li
        v-for="item in cart"
        :key="item.id"
        class="q-pa-md row justify-center items-center"
      >
        <div class="col-xs-3 col-md-2 flex justify-center">
          <img
            :src="`${baseUrl}${item.image}`"
            alt=""
            style="border: 1px solid black"
            class="item-image"
          />
        </div>
        <div class="flex items-center justify-center col-xs-3 col-md-3">
          <h5 class="q-px-sm gt-md">Title :</h5>
          <p class="item-name q-my-auto q-px-xs">{{ item.name }}</p>
        </div>

        <div
          class="col-xs-2 col-sm-2 col-md-3 flex justify-center items-center"
        >
          <h5 class="gt-md">Price :</h5>
          <h6 class="q-mx-md item-price">{{ item.totalPrice }}$</h6>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 flex justify-around">
          <q-btn
            @click="removeItemFromCart(item)"
            class="q-px-md item-btn"
            color="red-7"
            size="xs"
            >-</q-btn
          >
          <span>{{ item.quantity }}</span>
          <q-btn
            color="green-7"
            @click="addToCart(item)"
            class="q-px-md"
            size="xs"
            >+</q-btn
          >
        </div>
      </li>
    </div>
    <div class="col-xs-12 col-md-5 q-pa-md flex column justify-center">
      <div class="flex justify-center items-center">
        <h3 class="q-mx-md">Total Price :</h3>
        <h4 class="q-mx-md">{{ store.calculateTotal() }}$</h4>
      </div>
      <div class="flex justify-evenly">
        <q-btn
          size="xl"
          color="teal-7"
          style="width: 100%; border-radius: 10px"
          @click="userAuth"
          >checkout</q-btn
        >
      </div>
    </div>
  </div>
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

<style>
/* Default font size */
.item-name,
.item-price {
  font-size: 16px;
}

.item-image {
  width: 100%;
}

/* For small screens (phones) */
@media (max-width: 599px) {
  .item-name,
  .item-price {
    font-size: 14px;
    font-weight: bold;
  }

  .item-image {
    widows: 20%;
  }
}

/* For medium screens (tablets) */
@media (min-width: 600px) and (max-width: 1023px) {
  .item-name,
  .item-price {
    font-size: 18px;
  }
}

/* For large screens (desktops) */
@media (min-width: 1024px) {
  .item-name,
  .item-price {
    font-size: 20px;
  }
}
</style>
