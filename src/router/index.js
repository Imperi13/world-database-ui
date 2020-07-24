import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Axios from "../views/Axios.vue";
import Login from "../views/Login.vue";
import City from "../views/City.vue";
import axios from "axios";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      isPublic: true
    }
  },
  {
    path: "/axios",
    name: "axios",
    component: Axios,
    meta: {
      isPublic: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      isPublic: true
    }
  },
  {
    path: "/city/:cityName",
    name: "City",
    component: City,
    meta: {
      isPublic: false
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),

    meta: {
      isPublic: true
    }
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach(async (to, from, next) => {
  try {
    await axios.get("/api/whoami");
  } catch (_) {
    if (to.meta.isPublic) {
      return next(true);
    }
    return next("/login");
  }
  next(true);
});

export default router;
