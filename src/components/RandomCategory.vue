<template>
  <div class="bg-red-2 flex column items-center">
    <div class="col text-center q-ma-lg">
      <div class="text-h4 text-weight-thick">{{ card.category }}</div>
      <div class="text-subtitle1 text-weight-light q-mt-xs">
        CategorySubtitle
      </div>
    </div>
    <div
      class="row bg-blue justify-center"
      style="max-width: 70vw"
      v-if="products"
    >
      <RouterLink
        v-for="product in products.slice(0, 6)"
        :key="product"
        :to="`${removeSpace(card.category)}/${removeSpace(product.name)}`"
      >
        <q-card class="q-ma-lg" style="max-width: 300px">
          <q-img :src="product.imageUrl" />
          <q-card-section>
            <div class="text-h6">{{ product.name }}</div>
            <div class="text-subtitle2">card subtitle</div>
          </q-card-section>
          <q-card-section> {{ product.description }} </q-card-section>
          <q-card-section> {{ product.price }} </q-card-section>
        </q-card>
      </RouterLink>
    </div>
    <div v-else>
      <p>Loading.....</p>
    </div>
  </div>
</template>

<script>
import { ref, watch, computed } from "vue";
import { useSpaceRemover } from "../composables/useSpaceRemover";

export default {
  props: {
    card: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const products = ref(props.card.products);
    watch(
      () => props.card.products,
      (newVal) => {
        if (newVal) {
          products.value = newVal;
        }
      }
    );

    const { removeSpace } = useSpaceRemover();

    return {
      products,
      removeSpace,
    };
  },
};
</script>
