import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
export const routes: Array<RouteRecordRaw> = [
  {
    path: `/`,
    component: () => import("@/layouts/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/HomeView.vue"),
      },
    ],
  },
  {
    path: "/post",
    component: () => import("@/layouts/Default.vue"),
    children: [
      {
        path: "",
        name: "Create new post",
        component: () => import("@/views/CreatePostView.vue"),
      },
      {
        path: "/edit/:id",
        name: "Edit post",
        component: () => import("@/views/CreatePostView.vue"),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
