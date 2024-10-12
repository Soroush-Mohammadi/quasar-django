const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: ":category",
        name: "categoryView",
        component: () => import("pages/CategoryView.vue"),
      },
      {
        path: ":category/:id",
        name: "productView",
        component: () => import("pages/ProductView.vue"),
      },
      {
        path: "cart",
        name: "CartView",
        component: () => import("pages/CartView.vue"),
      },
      {
        path: "login",
        name: "LoginView",
        component: () => import("pages/LoginView.vue"),
      },
      {
        path: "checkout",
        name: "checkoutView",
        component: () => import("pages/CheckoutView.vue"),
      },
      {
        path: "register",
        name: "registerView",
        component: () => import("pages/RegisterView.vue"),
      },
      {
        path: "download",
        name: "DownlaodView",
        component: () => import("pages/DownloadView.vue"),
      },
      {
        path: "profile",
        name: "ProfieVeiw",
        component: () => import("pages/ProfileView.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
