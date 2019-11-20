import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/search",
      component: () =>
        import(/* webpackChunkName: "patent" */ "./layout/BasicLayout"),
      children: [
        {
          path: "/search/basic",
          name: "search",
          component: () =>
            import(/* webpackChunkName: "patent" */ "./views/Search/Basic")
        },
        {
          path: "/search/multi",
          name: "multiSearch",
          component: () =>
            import(/* webpackChunkName: "patent" */ "./views/Search/Multi")
        }
      ]
    },
    {
      path: "/",
      component: () =>
        import(/* webpackChunkName: "patent" */ "./layout/BasicLayout"),
      children: [
        {
          path: "/",
          redirect: "/search/basic"
        },
        {
          path: "/analysis",
          component: { render: h => h("router-view") },
          children: [
            {
              path: "/analysis/assignee",
              name: "assigneeAnalysis",
              component: () =>
                import(
                  /* webpackChunkName: "patent" */ "./views/Analysis/Assignee"
                )
            },
            {
              path: "/analysis/patent",
              name: "patentAnalysis",
              component: () =>
                import(
                  /* webpackChunkName: "patent" */ "./views/Analysis/Patent"
                )
            },
            {
              path: "/analysis/fund",
              name: "fundAnalysis",
              component: () =>
                import(/* webpackChunkName: "patent" */ "./views/Analysis/Fund")
            },
            {
              path: "/analysis/paper",
              name: "paperAnalysis",
              component: () =>
                import(
                  /* webpackChunkName: "patent" */ "./views/Analysis/Paper"
                )
            },
            {
              path: "/analysis/person",
              name: "personAnalysis",
              component: () =>
                import(
                  /* webpackChunkName: "patent" */ "./views/Analysis/Person"
                )
            }
          ]
        },
        {
          path: "*",
          name: "404",
          component: () => import(/* webpackChunkName: "ipc" */ "./views/404")
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
