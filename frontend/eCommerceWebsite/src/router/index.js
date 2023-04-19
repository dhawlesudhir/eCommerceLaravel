import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Login from "@/views/login/Login.vue";
import ForgotPassword from "@/views/login/ForgotPassword.vue";
import SetPassword from "@/views/login/SetPassword.vue";

const routes = [
  { name: "Dashboard", path: "/dashboard", component: Dashboard },
  { name: "Login", path: "/login", component: Login },
  { name: "SetPassword", path: "/set-password", component: SetPassword },
  {
    name: "ForgotPassword",
    path: "/forgotpassword",
    component: ForgotPassword,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
