import router from "./router";

router.beforeEach((to, from, next) => {
  if (to.path === "/about") {
    next();
  } else {
    next({ path: "/about" });
  }
});
