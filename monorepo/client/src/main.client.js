import { createApp } from "vue";
import App from "./App.vue";
import createRouter from "./router/index";
import createStore from "./store/index";
import { getRecentReadPost } from "@/middlewares/readposts";

const app = createApp(App);
const store = createStore();
const router = createRouter();

router.beforeEach(async (to, from, next) => {
  await getRecentReadPost(store);
  next();
});

app.use(store).use(router).mount("#app");

const isProductionMode = process.env.NODE_ENV === "production";

/**
 * @description 뷰 경고 메세지 필터 핸들러 함수
 */
app.config.warnHandler = (msg) => {
  if (isProductionMode) {
    return;
  }

  if (msg.indexOf("Invalid prop: type check failed for prop") === 0) {
    return;
  }
};
