import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PlacesEdit from "../views/PlacesEdit.vue";
import PlacesIndex from "../views/PlacesIndex.vue";
import PlacesNew from "../views/PlacesNew.vue";
import PlacesShow from "../views/PlacesShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/places/:id/edit",
    name: "PlacesEdit",
    component: PlacesEdit,
  },
  {
    path: "/places",
    name: "PlacesIndex",
    component: PlacesIndex,
  },
  {
    path: "/places/new",
    name: "PlacesNew",
    component: PlacesNew,
  },
  {
    path: "/places/:id",
    name: "PlacesShow",
    component: PlacesShow,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
