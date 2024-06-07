<template>
  <div class="row reverse justify-center items-center window-width q-mb-md">
    <div class="col-4 bg-red">
      <div class="row column">
        <div class="col bg-blue">
          <div class="row">
            <div v-for="card in 2" :key="card" class="col">
              <q-card style="min-height: 280px">
                <q-card-section>
                  <div class="text-h6">Card 1</div>
                </q-card-section>
                <q-card-section>
                  <p>Content of card 1</p>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
        <div class="col">
          <q-card v-for="card in 1" :key="card" style="min-height: 280px">
            <q-card-section>
              <div class="text-h6">Card 1</div>
            </q-card-section>
            <q-card-section>
              <p>Content of card 1</p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div class="col-6">
      <q-card style="min-height: 560px">
        <q-card-section>
          <div class="text-h6">Card 3</div>
        </q-card-section>
        <q-card-section>
          <p>Content of card 3</p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "site-banner",
};
</script>

<style scoped>
.q-card {
  margin: 10px;
}
</style>
