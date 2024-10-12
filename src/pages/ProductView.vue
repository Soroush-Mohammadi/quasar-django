<template>
  <q-page>
    <div class="row bg-white q-pa-xl justify-center" v-if="showTemplate">
      <!-- Product Image Section -->
      <div class="col-12 col-md-5">
        <div class="row justify-center q-pa-md">
          <!-- Main Product Image -->
          <div
            v-if="product.images"
            class="col-12 q-my-auto flex justify-center"
            style="height: 400px"
          >
            <img
              :src="`${baseUrl}${product.images[pictureNum].image}`"
              alt=""
              style="
                max-width: 100%;
                height: 100%;
                object-fit: contain;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              "
            />
          </div>

          <!-- Product Image Thumbnails -->
          <div class="col-12 flex justify-center q-mt-md">
            <q-img
              v-for="(img, index) in product.images"
              :key="img"
              :src="`${baseUrl}${img.image}`"
              alt=""
              class="q-ma-xs"
              @click="changePicture(index)"
              style="
                width: 80px;
                height: 80px;
                border-radius: 4px;
                border: 2px solid #f5f5f5;
                cursor: pointer;
              "
            />
          </div>
        </div>
      </div>

      <!-- Product Information Section -->
      <div class="col-12 col-md-5 q-px-lg">
        <!-- Product Name -->
        <h3 class="text-h4 text-bold" style="color: #333">
          {{ product.name }}
        </h3>

        <!-- Description Section -->
        <span class="text-subtitle1 text-weight-medium text-primary"
          >Description</span
        >
        <div
          class="q-my-md"
          style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px"
        >
          <p class="text-body1" style="color: #666">
            {{ product.description }}
          </p>
        </div>

        <!-- Price and Stock Section -->
        <div
          class="q-my-xl text-h6 flex justify-between"
          style="font-size: 1.2rem"
        >
          <span class="text-bold text-primary"
            >Price: {{ product.price }}$</span
          >
          <span
            class="text-bold"
            :style="{ color: product.stock > 0 ? 'green' : 'red' }"
          >
            Stock: {{ product.stock }}
          </span>
        </div>

        <!-- Add to Cart Button -->
        <div class="q-my-xl">
          <q-btn
            class="q-py-md q-px-xl q-shadow-2 q-rounded-borders"
            style="
              background: #ff5722;
              color: white;
              width: 100%;
              font-size: 1.2rem;
            "
            label="Add to Cart"
            @click="addItemToCart(createProduct)"
          />
        </div>
      </div>
    </div>

    <div v-else>
      <div class="row justify-center items-center">
        <q-spinner color="primary" size="3em" :thickness="10" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, watch, computed } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "../stores/productStore";
import { useDashRemover } from "../composables/useDashRemover";
import { useCartStore } from "../stores/cartStore";

import { storeToRefs } from "pinia";
import axios from "axios";

export default {
  setup() {
    const options = ["small", "meduim", "large"];
    const colors = ["red", "green", "yellow"];
    const model = ref([]);
    const baseUrl = "https://onlineshop-parhams-projects-41827abc.vercel.app";

    const route = useRoute();
    const tab = ref("mails");

    const changePicture = (val) => {
      pictureNum.value = val;
    };

    const store = useProductStore();
    const dashRemover = useDashRemover();

    const { findCategorybyName } = store;

    const pictureNum = ref(0);
    const product = ref({});
    const showTemplate = ref(false);
    const cartStore = useCartStore();

    const addItemToCart = (item) => {
      cartStore.addToCart(item);
    };

    cartStore.loadCart();

    const selectPicture = (value) => (pictureNum.value = value);

    const createProduct = ref({});
    const cartProduct = (myProduct) => {
      createProduct.value = {
        name: myProduct.value.name,
        price: myProduct.value.price,
        image: myProduct.value.images[0].image,
        quantity: 1,
        upc: myProduct.value.upc,
      };
    };

    const getProduct = async (url) => {
      try {
        const response = await axios.get(url);
        product.value = await response.data;
        cartProduct(product);
      } catch (error) {
        console.log("Error", error);
        throw error; // Optionally re-throw the error so it can be handled by the caller
      }
    };

    watch(product, (newVal) => {
      if (newVal) {
        showTemplate.value = true;
      } else {
        showTemplate.value = false;
      }
    });

    // here we find product and show it in the template

    return {
      options,
      colors,
      selectPicture,
      pictureNum,
      tab,
      model,
      findCategorybyName,
      dashRemover,
      route,
      getProduct,
      baseUrl,
      product,
      changePicture,
      showTemplate,
      cartProduct,
      createProduct,
      addItemToCart,
    };
  },

  async beforeRouteEnter(to, from, next) {
    const baseUrl =
      "https://onlineshop-parhams-projects-41827abc.vercel.app/main";

    next(
      async (vm) =>
        (vm.product.value = await vm.getProduct(`${baseUrl}${to.fullPath}`))
    );
  },
};
</script>
