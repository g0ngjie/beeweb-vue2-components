import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "",
      redirect: "/testpaper",
    },
    {
      path: "/confetti",
      name: "confetti",
      component: () => import("./views/confetti/index.vue"),
    },
  ],
});
