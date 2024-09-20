<template>
  <div class="q-pa-md" v-if="showPictures">
    <q-carousel animated v-model="slide" arrows navigation infinite>
      <template v-slot:prev>
        <q-btn round flat icon="arrow_back" class="my-arrow" />
      </template>
      <template v-slot:next>
        <q-btn round flat icon="arrow_forward" class="my-arrow" />
      </template>
      <q-carousel-slide
        v-for="img in banners"
        :key="img.id"
        :name="img.title"
        :img-src="`${baseUrl}${img.image}`"
      />
    </q-carousel>
  </div>
</template>

<script>
import { onMounted, ref, watch } from "vue";
export default {
  name: "site-banner",
  props: {
    banners: {
      type: Array,
      required: true,
    },
  },

  setup(props) {
    const baseUrl = "https://onlineshop-parhams-projects-41827abc.vercel.app";
    const showPictures = ref(false);
    const slide = ref(null);
    watch(
      () => props.banners,
      (newVal) => {
        if (props.banners.length > 0) {
          showPictures.value = true;
          slide.value = newVal[0].title; // Initialize with first slide's name
        }
      },
      { immediate: true }
    );
    return { baseUrl, showPictures, slide };
  },
};
</script>

<style scoped>
.q-card {
  margin: 10px;
}

.my-arrow {
  background-color: #858585;
  color: rgb(14, 1, 1);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
