<template>
  <div class="container">
    <div v-if="products" class="row justify-center q-col-gutter-md">
      <div v-if="products.category" class="col q-pa-xl q-ma-md">
        <h4>{{ products.category.name }}</h4>
        <p>{{ products.category.description }}</p>
        <div class="row q-col-gutter-xl justify-center q-ma-lg">
          <div
            class="col-3 flex column q-col-gutter-xs"
            v-for="item in products.products"
            :key="item"
          >
            <img
              :src="`${baseUrl}${item.image.image_url}`"
              alt="image"
              style="max-width: 300px"
            />
            <span> {{ item.name }}</span>
            <span>{{ item.description }}</span>
            <span>
              {{ item.price }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import axios from "axios";
export default {
  data() {
    return {};
  },

  setup() {
    const products = ref([]);

    const baseUrl = "https://onlineshop-parhams-projects-41827abc.vercel.app";

    const getProducts = async (url) => {
      try {
        const response = await axios.get(url);
        products.value = await response.data;
        console.log(products.value);
      } catch (error) {
        console.log("Error", error);
        throw error; // Optionally re-throw the error so it can be handled by the caller
      }
    };

    let hasProducts = false;

    watch(products.value, (newVal) => {
      console.log(newVal, "from watch");
    });

    return {
      getProducts,
      products,
      hasProducts,
      baseUrl,
    };
  },

  async beforeRouteEnter(to, from, next) {
    const baseUrl =
      "https://onlineshop-parhams-projects-41827abc.vercel.app/main";

    // console.log(`${baseUrl}${to.fullPath}`);

    next(
      async (vm) =>
        (vm.products.value = await vm.getProducts(`${baseUrl}${to.fullPath}`))
    );
  },
};
</script>

<style>
.container {
  height: 130vh;
}
</style>
