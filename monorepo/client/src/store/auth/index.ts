import { Module } from "vuex";
import { RootState } from "@/store/index";

export const SET_LOGIN = "SET_LOGIN";
export const SET_LOGOUT = "SET_LOGOUT";

export interface LoginStatus {
  userId: string;
  isLogin: boolean;
}

export const fontSizeModule: Module<LoginStatus, RootState> = {
  state: (): LoginStatus => ({
    userId: "",
    isLogin: false,
  }),
  mutations: {
    [SET_LOGIN](state, userId: string) {
      state.userId = userId;
      state.isLogin = true;
    },
    [SET_LOGOUT](state) {
      state.userId = "";
      state.isLogin = false;
    },
  },
  getters: {
    getLoginedUserId(state): LoginStatus["userId"] {
      return state.userId;
    },
  },
  actions: {
    setLogin({ commit }, id: string) {
      commit(SET_LOGIN, id);
    },
    setLogout({ commit }) {
      commit(SET_LOGOUT);
    },
  },
};
