import { Module } from "vuex";
import { RootState } from "@/store/index";
import { NavUrl } from "custom-type";

export const SET_CURRENT_TAB = "SET_CURRENT_TAB";
export const SET_RECENT_READ_POST_LEN = "SET_RECENT_READ_POST_LEN";

export interface UiStatus {
  currentTab: NavUrl;
  recentReadPostsLen: number;
}

export const uiModule: Module<UiStatus, RootState> = {
  state: (): UiStatus => ({
    currentTab: "/",
    recentReadPostsLen: 0,
  }),
  mutations: {
    [SET_CURRENT_TAB](state, tab: NavUrl) {
      state.currentTab = tab;
    },
    [SET_RECENT_READ_POST_LEN](state, len: number) {
      state.recentReadPostsLen = len;
    },
  },
  actions: {
    setCurrentTab({ commit }, tab: NavUrl) {
      commit(SET_CURRENT_TAB, tab);
    },
  },
};
