import { BASE_URL } from "@/utils";
import { httpFetchData } from "@/utils/apihandler";
import { Store } from "vuex";
import { SET_RECENT_READ_POST_LEN } from "@/store/ui";
import { RootState } from "@/store/index";
import { PostItem } from "custom-type";

export const getRecentReadPost = async (store: Store<RootState>) => {
  if (store.state.uiModule.recentReadPostsLen > 0) {
    return;
  }

  try {
    const URL = `${BASE_URL}/post/read`;
    const { data } = await httpFetchData<PostItem[]>(URL);
    store.commit(SET_RECENT_READ_POST_LEN, data.length);
  } catch (e: any) {
    console.error(e.message);
  }
};
