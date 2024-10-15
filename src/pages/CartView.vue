<template>
  <q-page>
    <div class="row bg-white">
      <div class="col-12 col-md-8">
        <h5 class="q-px-md">Shop Cart</h5>
        <q-separator />
        <li
          v-for="item in cart"
          :key="item.id"
          class="row q-my-sm q-py-sm justify-center items-center"
          style="border-bottom: 1px solid gray"
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
      <div class="col-12 col-md-4 flex column q-mb-xs bg-grey-4">
        <div class="section q-my-xl q-mx-lg">
          <p class="text-weight-bold text-h5">Summary</p>
          <q-separator size="1px" />
        </div>
        <div class="row section justify-between q-my-sm q-mx-lg q-gutter-lg">
          <span class="text-h5 col-xs-12 col-sm-5"> ITEMS 3 </span>
          <span class="text-h6 col-xs-12 col-sm-5">Price</span>
        </div>
        <div class="section q-my-xl q-mx-lg">
          <p class="text-h5 text-weight-medium">SHIPPING</p>
          <q-select
            v-model="selectedItem"
            :options="options"
            :dense="dense"
            style="width: 400px"
            outlined
            :disable="isSelected"
            class="small-screen"
          />
        </div>

        <div class="section q-my-lg q-mx-lg">
          <p class="text-h5 text-weight-medium">Give Code</p>
          <q-input
            v-model="code"
            :dense="dense"
            style="width: 400px"
            outlined
            :disable="true"
          />
          <br />
          <q-separator size="1px" class="q-my-md" />
        </div>

        <div class="row justify-between justify-xs-center">
          <h3 class="q-mx-md col-xs-12 col-sm-6">Total Price :</h3>
          <h4 class="q-mx-md col-xs-12 col-sm-6">
            {{ store.calculateTotal() }}$
          </h4>
        </div>
        <div class="flex justify-evenly">
          <q-btn size="xl" color="primary" style="width: 100%" @click="userAuth"
            >checkout</q-btn
          >
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { storeToRefs } from "pinia";
import { useCartStore } from "../stores/cartStore";
import { useUserStore } from "../stores/userStore";
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
  data() {
    return {
      selectedItem: "Standard Delievery",
      // your dropdown options
      isSelected: true, // controls if the dropdown is disabled
      code: "Your Code Here",
    };
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

    onSelect() {
      // Disable dropdown after selection
      this.isSelected = true;
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

  .section {
    margin: 20px 5px;
    padding: 0;
    justify-content: center;
    align-items: center;
  }

  .small-screen {
    width: 100%;
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

  .small-screen {
    width: 100%;
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
