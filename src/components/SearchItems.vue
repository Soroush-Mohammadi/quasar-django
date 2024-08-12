<template>
  <q-list bordered separator dark>
    <RouterLink
      v-for="product in searchItems"
      :key="product.name"
      :to="`${removeSpace(product.category)}/${removeSpace(product.name)}`"
      @click="closeList()"
    >
      <q-item clickable v-ripple>
        <q-item-section>
          <div class="row justify-between items-center">
            <div class="col-2">
              <q-img :src="product.images[0]" width="100px" />
            </div>
            <div
              class="col-8 column justify-around text-black"
              style="list-style: none"
            >
              <li>Name : {{ product.name }}</li>
              <li>{{ product.caption }}</li>
              <li>Price : {{ product.price + "$" }}</li>
              <li>Number : {{ product.quantity }}</li>
            </div>
          </div>
        </q-item-section>
      </q-item>
    </RouterLink>
  </q-list>
</template>

<script>
import { useProductStore } from "../stores/productStore";
import { useSpaceRemover } from "../composables/useSpaceRemover";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
export default {
  name: "search-items",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  emit: ["reset-input"],

  setup(props, { emit }) {
    const store = useProductStore();
    const { products } = storeToRefs(store);
    const router = useRoute();
    const { removeSpace } = useSpaceRemover();
    const searchItems = ref([]);
    const closeList = () => {
      searchItems.value = [];
      emit("reset-input");
    };

    watch(
      () => props.items,
      (val) => (searchItems.value = val)
    );

    return {
      products,
      router,
      removeSpace,
      searchItems,
      closeList,
    };
  },
};
</script>

<style></style>
