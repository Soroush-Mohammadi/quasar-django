<template>
  <q-menu anchor="bottom start" self="top start">
    <q-list style="min-width: 300px">
      <q-item v-for="item in menu" :key="item.name" clickable>
        <q-item-section>
          {{ item.name }}
        </q-item-section>
        <q-item-section v-if="item.children.length > 0">
          <top-menu
            v-for="child in item.children"
            :key="child.name"
            :menu="item.children"
          />
        </q-item-section>
        <q-item-section>
          <q-icon name="keyboard_arrow_right" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</template>

<script>
export default {
  name: "top-menu",
  props: {
    menu: {
      type: Object,
      required: true,
    },
  },
};
</script>
