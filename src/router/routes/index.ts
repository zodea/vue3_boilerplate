import type { AppRouteRecordRaw } from "/@/router/types";

export const Home: AppRouteRecordRaw = {
  path: "/",
  name: "home",
  component: () => import("/@/views/index.vue"),
  meta: {
    title: "首页",
  },
};

// Basic routing without permission
export const basicRoutes = [Home];
