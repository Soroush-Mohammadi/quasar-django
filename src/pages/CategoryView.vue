<template>
  <div class="container q-pa-lg">
    <div v-if="toggle" class="row justify-center q-col-gutter-xl">
      <div class="col q-pa-xl q-ma-md">
        <q-card
          class="q-pa-md bg-primary text-white q-card-shadow"
          style="border-radius: 12px"
        >
          <h4 class="text-h4 text-bold q-mb-md">
            {{ products.category.name }}
          </h4>
          <p class="text-body1 q-mb-lg">{{ products.category.description }}</p>
        </q-card>

        <div class="row q-col-gutter-xl justify-between q-mt-md q-pa-md">
          <div
            class="col-3 q-pa-md q-hoverable q-card-shadow"
            v-for="item in products.products"
            :key="item.id"
          >
            <RouterLink
              :to="`/${removeSpace(item.category_id.name)}/${removeSpace(
                item.name
              )}`"
              style="text-decoration: none"
            >
              <q-card style="border-radius: 12px; transition: transform 0.3s">
                <div class="q-pa-md text-center">
                  <q-img
                    :src="`${baseUrl}${item.image.image_url}`"
                    alt="image"
                    style="
                      max-width: 50%;
                      height: auto;
                      border-radius: 8px;
                      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    "
                  />
                  <div class="text-h6 text-primary q-mt-md">
                    {{ item.name }}
                  </div>
                  <div class="text-body2 text-grey-7 q-mt-xs">
                    {{ item.description }}
                  </div>
                  <q-badge
                    color="green-6"
                    :label="`Price: ${item.price}`"
                    class="q-mt-md"
                    style="font-size: 1.1em"
                  />
                </div>
              </q-card>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center text-body1 q-pa-md">
      <q-spinner color="primary" size="3em" :thickness="10" />
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import axios from "axios";
import { useCartStore } from "../stores/cartStore";
import { useSpaceRemover } from "../composables/useSpaceRemover";
export default {
  data() {
    return {};
  },

  setup() {
    const products = ref([]);

    const baseUrl = "https://onlineshop-parhams-projects-41827abc.vercel.app";
    let toggle = ref(false);

    const getProducts = async (url) => {
      try {
        const response = await axios.get(url);
        products.value = await response.data;
      } catch (error) {
        console.log("Error", error);
        throw error; // Optionally re-throw the error so it can be handled by the caller
      }
    };

    const { removeSpace } = useSpaceRemover();

    let hasProducts = false;

    watch(products, (newVal) => {
      if (newVal) {
        toggle.value = true;
      } else {
        toggle.value = false;
      }
    });

    return {
      getProducts,
      products,
      hasProducts,
      baseUrl,
      toggle,
      removeSpace,
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
  height: auto;
}
</style>
