// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
      {
        path: "/services",
        name: "Services",
        component: () => import("@/views/Services.vue"),
      },
      {
        path: "/portfolio",
        name: "Portfolio",
        component: () => import("@/views/Portfolio.vue"),
      },
      {
        path: "/about",
        name: "About Us",
        component: () => import("@/views/AboutUs.vue"),
      },
      {
        path: "/contact",
        name: "Contact Us",
        component: () => import("@/views/ContactUs.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
