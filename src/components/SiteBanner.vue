<template>
  <div class="row reverse justify-center items-center window-width q-mb-md">
    <div class="col-4 bg-red">
      <div class="row column">
        <div class="col bg-blue">
          <div class="row">
            <div v-for="card in cards.slice(1)" :key="card" class="col">
              <q-card>
                <q-card-section>
                  <q-img :src="card.imageUrl" style="min-height: 260px"></q-img>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
        <div class="col">
          <q-card
            v-for="card in cards.slice(0, 1)"
            :key="card"
            style="min-height: 280px"
          >
            <q-card-section>
              <q-img :src="card.imageUrl" style="max-height: 250px"></q-img>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div class="col-6" v-for="card in cards.slice(0, 1)" :key="card">
      <q-card style="min-height: 560px">
        <q-card-section>
          <q-img :src="card.imageUrl" style="max-height: 580px"></q-img>
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
