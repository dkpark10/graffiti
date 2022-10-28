import { createStore } from "vuex";
import { fontSizeModule, FontSizeState } from "@/store/fontsize/index";
import { uiModule, UiStatus } from "@/store/ui/index";
import { commentModule, CommentStatus } from "@/store/comment/index";

export interface RootState {
  fontSizeModule: FontSizeState;
  uiModule: UiStatus;
  commentModule: CommentStatus;
}

export default () => {
  return createStore({
    modules: {
      fontSizeModule,
      uiModule,
      commentModule,
    },
  });
};
