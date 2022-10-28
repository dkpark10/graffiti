/* eslint-disable */
import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
} from "vue-router";
import HomeView from "../components/page/Home.vue";
import Login from "../components/page/Login.vue";
import Ranking from "../components/page/Ranking.vue";
import RecentReadPost from "../components/page/RecentReadPost.vue";
import PostDetail from "../components/page/PostDetail.vue";
import Hub from "../components/page/Hub.vue";

// const notcsRouter = [
//   {
//     path: "/",
//     name: "home",
//     component: HomeView,
//   },
//   {
//     path: "/login",
//     name: "login",
//     component: Login,
//   },
//   {
//     path: "/ranking",
//     name: "ranking",
//     component: Ranking,
//   },
//   {
//     path: "/recent",
//     name: "recent-read-posts",
//     component: RecentReadPost,
//   },
//   {
//     path: "/post/:id",
//     name: "post-detail",
//     component: PostDetail,
//   },
//   {
//     path: "/:category",
//     name: "category",
//     component: Hub,
//   },
// ];

export default () => {
  const isSsrMode = typeof window === "undefined";
  const createHistory = isSsrMode ? createMemoryHistory : createWebHistory;

  return createRouter({
    history: createHistory(process.env.BASE_URL),
    routes: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      // {
      //   path: "/login",
      //   name: "login",
      //   component: () =>
      //     import(/* webpackChunkName: "login" */ "../components/page/Login.vue"),
      // },
      {
        path: "/ranking",
        name: "ranking",
        component: () =>
          import(/* webpackChunkName: "ranking" */ "../components/page/Ranking.vue"),
      },
      {
        path: "/recent",
        name: "recent-read-posts",
        component: () =>
          import(/* webpackChunkName: "recentreadpost" */ "../components/page/RecentReadPost.vue"),
      },
      {
        path: "/post/:id",
        name: "post-detail",
        component: () =>
          import(/* webpackChunkName: "postdetail" */ "../components/page/PostDetail.vue"),
      },
      {
        path: "/:category",
        name: "category",
        component: () =>
          import(/* webpackChunkName: "hub" */ "../components/page/Hub.vue"),
      },
      {
        path: "/search/:keyword",
        name: "search",
        component: () =>
          import(/* webpackChunkName: "hub" */ "../components/page/Search.vue"),
      },
      {
        path: "/suspense",
        name: "suspense",
        component: () =>
          import(/* webpackChunkName: "hub" */ "../components/page/Suspense.vue"),
      },
    ],
  });
};
