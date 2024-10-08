<template>
  <div v-if="toggle" class="row justify-center items-center q-ma-lg">
    <RouterLink
      :to="`${removeSpace(productRandom.category_id.name)}/${removeSpace(
        productRandom.name
      )}`"
      style="width: 100%; max-width: 1000px; text-decoration: none"
    >
      <q-card
        class="q-pa-md q-my-xl q-card-shadow q-hoverable"
        style="
          border-radius: 16px;
          transition: transform 0.3s;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        "
      >
        <div
          v-if="productRandom && productRandom.image"
          class="row justify-center items-center"
        >
          <!-- Image Section - Larger and Side-by-Side -->
          <q-card-section
            class="col-xs-12 col-sm-8 col-md-6 justify-center q-pa-md"
          >
            <q-img
              :src="`${baseUrl}${productRandom.image.image_url}`"
              alt=""
              style="
                max-width: 100%;
                height: auto;
                border-radius: 12px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
              "
            />
          </q-card-section>

          <!-- Text and Details Section -->
          <q-card-section
            class="col-xs-12 col-sm-8 col-md-6 q-pa-lg flex justify-center"
          >
            <div class="text-h3 text-bold q-mb-md" style="color: #333">
              {{ productRandom.name }}
            </div>
            <p class="text-body1 q-my-md" style="color: #666; line-height: 1.8">
              {{ productRandom.description }}
            </p>
            <p class="text-h5 q-my-md" style="color: #666">
              <span class="text-weight-bold"> Price : </span
              ><span class="text-weight-medium q-px-md text-white bg-blue-6">
                {{ productRandom.price }}$
              </span>
            </p>

            <!-- Action Button -->
            <q-card-actions align="left" class="q-pa-none q-mt-lg">
            </q-card-actions>
          </q-card-section>
        </div>

        <!-- Loading State -->
        <div v-else class="text-center q-pa-md">
          <p>Loading product...</p>
        </div>
      </q-card>
    </RouterLink>
  </div>
</template>

<script>
import { ref, watch, onMounted } from "vue";
import { useProductStore } from "../stores/productStore";
import { useSpaceRemover } from "../composables/useSpaceRemover";

export default {
  setup() {
    const selectedProduct = ref(null);
    const store = useProductStore();
    const { parhamData } = store;

    const data = ref([]);
    const productRandom = ref([]);
    const baseUrl = "https://onlineshop-parhams-projects-41827abc.vercel.app";
    const src = ref("");
    const { removeSpace } = useSpaceRemover();
    let toggle = ref(false);

    onMounted(async () => {
      try {
        data.value = await parhamData();
        productRandom.value = data.value["product_random"];
      } catch (error) {
        console.log("faild", error);
      }
    });

    watch(
      () => productRandom.value,
      (newValue) => {
        if (newValue) {
          toggle.value = true;
        } else {
          toggle.value = false;
        }
      }
    );

    return {
      selectedProduct,
      productRandom,
      data,
      baseUrl,
      src,
      removeSpace,
      toggle,
    };
  },
};
</script>
