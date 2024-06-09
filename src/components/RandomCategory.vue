<template>
  <q-page-container class="bg-red">
    <div class="col text-center q-ma-lg">
      <div class="text-h4 text-weight-thick">CategoryTitle</div>
      <div class="text-subtitle1 text-weight-light q-mt-xs">
        CategorySubtitle
      </div>
    </div>
    <div class="col">
      <div v-for="row in 2" :key="row" class="row justify-center">
        <q-card
          v-for="card in 4"
          :key="card"
          class="q-ma-xs"
          style="width: 300px"
        >
          <img src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-card-section>
            <div class="text-h6">card title</div>
            <div class="text-subtitle2">card subtitle</div>
          </q-card-section>
          <q-card-section> card description </q-card-section>
          <q-card-section> card price </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page-container>
</template>

<script setup></script>
