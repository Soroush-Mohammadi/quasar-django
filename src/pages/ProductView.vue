<template>
  <div class="row justify-center bg-red-6 full-window q-mt-lg">
    <div class="col-5 q-mx-lg">
      <div class="column flex justify-between">
        <div>
          <div class="col">
            <q-img
              class="q-mb-sm"
              :src="`https://placehold.co/600x400/${pictureNum}`"
              style="height: 450px"
            />
          </div>
        </div>
        <div class="row justify-between q-col-gutter-md">
          <div
            class="col-3"
            v-for="pic in pictures"
            :key="pic"
            @click="selectPicture(pic)"
            style="cursor: pointer"
          >
            <q-img :src="`https://placehold.co/600x400/${pic}`"></q-img>
          </div>
        </div>
      </div>
    </div>
    <div class="col-5 bg-blue">
      <div class="column">
        <div class="col column bg-green q-pa-md">
          <div class="q-my-sm text-h3">{{ product.name }}</div>
          <div class="q-my-sm text-h6">subtitle</div>
          <div class="q-my-sm row">
            <q-select
              square
              outlined
              v-model="model"
              :options="options"
              label="size"
              style="width: 100px"
            />
            <q-select
              square
              outlined
              v-model="model"
              :options="colors"
              label="color"
              style="width: 100px"
            />
          </div>
          <div class="q-my-sm text-h3">Price : {{ product.price }}$</div>
          <div class="q-my-sm row justify-start">
            <q-btn class="q-mx-md" color="primary" label="Add To Card" />
            <q-btn class="q-mx-md" color="primary" label="Add To Wishlist" />
          </div>
        </div>
        <div class="col bg-yellow">
          <div class="q-gutter-y-md">
            <q-card>
              <q-tabs
                v-model="tab"
                dense
                class="bg-grey-2 text-grey-7"
                active-color="primary"
                indicator-color="purple"
                align="justify"
              >
                <q-tab name="mails" label="description" />
                <q-tab name="alarms" label="shipping" />
              </q-tabs>

              <q-tab-panels
                v-model="tab"
                animated
                class="bg-primary text-white"
                style="height: 300px"
              >
                <q-tab-panel name="mails">
                  <div class="text-h6">Mails</div>
                  {{ product.description }}
                </q-tab-panel>

                <q-tab-panel name="alarms">
                  <div class="text-h6">Alarms</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-tab-panel>

                <q-tab-panel name="movies">
                  <div class="text-h6">Movies</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-tab-panel>
              </q-tab-panels>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "../stores/productStore";
import { useDashRemover } from "../composables/useDashRemover";
import { storeToRefs } from "pinia";

export default {
  data() {
    return {
      product: {},
    };
  },
  setup() {
    const options = ["small", "meduim", "large"];
    const colors = ["red", "green", "yellow"];
    const model = ref([]);

    const pictures = ["white/black", "red/black", "green/white", "blue/white"];
    const route = useRoute();
    const tab = ref("mails");

    const store = useProductStore();
    const dashRemover = useDashRemover();

    const { findCategorybyName } = store;

    const pictureNum = ref(pictures[0]);

    const selectPicture = (value) => (pictureNum.value = value);

    // here we find product and show it in the template

    return {
      options,
      colors,
      pictures,
      selectPicture,
      pictureNum,
      tab,
      model,
      findCategorybyName,
      dashRemover,
    };
  },

  beforeRouteEnter(to, from, next) {
    const findProductAndSettle = async (vm) => {
      try {
        const cat = await vm.findCategorybyName(to.params.category);
        vm.product = await cat.products.find(
          (product) => product.name === to.params.id
        );
        // next(); // Settle the route
      } catch (error) {
        console.error("Error finding product:", error);
        next("/error"); // Redirect to an error page
      }
    };

    next(findProductAndSettle);
  },
};
</script>
