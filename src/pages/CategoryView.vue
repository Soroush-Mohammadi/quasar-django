<template>
  <div>Category</div>
</template>

<script>
export default {
  data() {
    return {};
  },

  setup() {
    return {};
  },

  async beforeRouteEnter(to, from, next) {
    const baseUrl =
      "https://onlineshop-parhams-projects-41827abc.vercel.app/main";

    next(
      async (vm) =>
        (vm.product.value = await vm.getProducts(`${baseUrl}${to.fullPath}`))
    );
  },
};
</script>
