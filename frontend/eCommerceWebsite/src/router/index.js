import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import Dashboard from "@/views/Dashboard.vue";
import Login from "@/views/login/Login.vue";
import ForgotPassword from "@/views/login/ForgotPassword.vue";
import SetPassword from "@/views/login/SetPassword.vue";
import AppLayout from "@/components/AppLayout.vue";
import NotFound from "@/views/NotFound.vue";
import Products from "@/views/Products/Products.vue";
import Users from "@/views/Users/Users.vue";
import Customers from "@/views/Customers/Customers.vue";
import Orders from "@/views/Orders/Orders.vue";
import Reports from "@/views/Reports/Reports.vue";
import OrdersReport from "@/views/Reports/OrdersReport.vue";
const routes = [
  {
    path: "/",
    redirect: "/app",
  },
  {
    path: "/app",
    name: "app",
    redirect: "/app/dashboard",
    component: AppLayout,
    meta: { requiresAuth: true },
    children: [
      { path: "dashboard", name: "app.dashboard", component: Dashboard },
      { path: "products", name: "app.products", component: Products },
      { path: "users", name: "app.users", component: Users },
      { path: "customers", name: "app.customers", component: Customers },
      //   {
      //     path: "customers/:id",
      //     name: "app.customers.view",
      //     component: CustomerView,
      //   },
      {
        path: "orders",
        name: "app.orders",
        component: Orders,
      },
      //   {
      //     path: "orders/:id",
      //     name: "app.orders.view",
      //     component: OrderView,
      //   },
      {
        path: "/report",
        name: "reports",
        component: Reports,
        meta: { requiresAuth: true },
        children: [
          {
            path: "orders/:date?",
            name: "reports.orders",
            component: OrdersReport,
          },
          //   {
          //     path: "customers/:date?",
          //     name: "reports.customers",
          //     component: CustomersReport,
          //   },
        ],
      },
    ],
  },
  { name: "dashboard", path: "/dashboard", component: Dashboard },
  {
    name: "login",
    path: "/login",
    component: Login,
    meta: { requiresGuest: true },
  },
  { name: "SetPassword", path: "/set-password/:token", component: SetPassword },
  {
    name: "ForgotPassword",
    path: "/forgotpassword",
    component: ForgotPassword,
    meta: { requiresGuest: true },
  },
  {
    path: "/:pathMatch(.*)",
    name: "notfound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: "login" });
  } else if (to.meta.requiresGuest && store.state.user.token) {
    next({ name: "app.dashboard" });
  } else {
    next();
  }
});
export default router;
