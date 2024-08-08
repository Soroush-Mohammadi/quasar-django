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
          <div class="q-my-sm text-h3">title</div>
          <div class="q-my-sm text-h6">Lorem ipsum dolor sit.</div>
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
          <div class="q-my-sm text-h3">Price : 120$</div>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
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

export default {
  setup() {
    const options = ["small", "meduim", "large"];
    const colors = ["red", "green", "yellow"];
    const model = ref([]);

    const pictures = ["white/black", "red/black", "green/white", "blue/white"];

    const tab = ref("mails");
    const route = useRoute();

    const pictureNum = ref(pictures[0]);

    const selectPicture = (value) => (pictureNum.value = value);

    return {
      options,
      colors,
      pictures,
      route,
      selectPicture,
      pictureNum,
      tab,
      model,
    };
  },
};
</script>
