<template>
  <div class="row reverse justify-around items-center q-ma-xl bg-teal-4">
    <div class="col col-md-5">
      <div class="row column justify-between">
        <div class="col q-ma-sm">
          <div class="row justify-center">
            <div class="col" v-for="card in cards.slice(1)" :key="card">
              <q-card>
                <q-card-section>
                  <q-img :src="card.imageUrl" style="min-height: 260px"></q-img>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col q-ma-sm">
          <q-card v-for="card in cards.slice(0, 1)" :key="card">
            <q-card-section>
              <q-img :src="card.imageUrl" style="max-height: 250px"></q-img>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div
      class="col col-12 col-md-6"
      v-for="card in cards.slice(0, 1)"
      :key="card"
    >
      <q-card>
        <q-card-section>
          <q-img :src="card.imageUrl"></q-img>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "site-banner",
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.q-card {
  margin: 10px;
}
</style>
