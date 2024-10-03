import { route } from "quasar/wrappers";
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import routes from "./routes";
import { useCartStore } from "../stores/cartStore";

// Pinia store should be used within the function scope
export default route(function (/* { store, ssrContext } */) {
  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    history: createWebHistory(process.env.VUE_ROUTER_BASE),
  });

  // Global navigation guard
  Router.beforeEach((to, from, next) => {
    const cartStore = useCartStore(); // Initialize the cart store inside the guard
    cartStore.loadCart(); // Call the function to load cart data before every route
    next(); // Proceed with navigation
  });

  return Router;
});
