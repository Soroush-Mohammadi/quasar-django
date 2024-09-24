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
