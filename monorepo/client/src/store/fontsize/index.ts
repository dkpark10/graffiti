import { Module } from "vuex";
import { RootState } from "@/store/index";

export const INCREASE_FONT_SIZE = "INCREASE_FONT_SIZE";
export const DECREASE_FONT_SIZE = "DECREASE_FONT_SIZE";

export interface FontSizeState {
  fontSizeRatio: number;
  index: 0;
}

export const fontSizeModule: Module<FontSizeState, RootState> = {
  state: (): FontSizeState => ({
    fontSizeRatio: 1,
    index: 0,
  }),
  mutations: {
    [INCREASE_FONT_SIZE](state, ratio: number) {
      if (state.index >= 3) {
        return;
      }

      state.fontSizeRatio = Number((state.fontSizeRatio *= ratio).toFixed(2));
      state.index += 1;
    },
    [DECREASE_FONT_SIZE](state, ratio: number) {
      if (state.index <= 0) {
        return;
      }

      state.fontSizeRatio = Number((state.fontSizeRatio /= ratio).toFixed(2));
      state.index -= 1;
    },
  },
  getters: {
    getFontSizeRatio(state): FontSizeState["fontSizeRatio"] {
      return state.fontSizeRatio;
    },
  },
  actions: {
    increaseFontSize({ commit }, ratio: number) {
      commit(INCREASE_FONT_SIZE, ratio);
    },
    decreaseFontSize({ commit }, ratio: number) {
      commit(DECREASE_FONT_SIZE, ratio);
    },
  },
};
