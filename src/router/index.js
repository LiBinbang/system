import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//配置路由
const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/Login"),
  },
  {
    path: "/home",
    name: "home",
    meta: {
      name: "首页",
    },
    component: () => import("@/views/home/Home"),
    redirect: "/welcome",
    children: [
      {
        path: "/welcome",
        name: "welcome",
        component: () => import("@/views/welcome/Welcome"),
      },
      {
        path:"/ceshi",
        name:"cehsi",
        component:()=>import("@/views/ceshi/ceshi")
      }
    ],
  },
  //路由重定向，用户输错跳转到欢迎页
  {
    path: "*",
    redirect: "/welcome"
  },
];

const router = new VueRouter({
  routes
});

//（路由拦截）导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    return next();
  }
  var token = window.sessionStorage.getItem("token");
  if (!token) {
    return next("/login");
  }
  next();
});

export default router;
