<template>
  <footer>
    <div class="footer_top">
      <div>
        <button
          class="footer_button"
          @click="refresh"
          :style="{ width: '32px' }"
        >
          <Refresh />
        </button>
      </div>
      <div class="font_size_controller_wrapper">
        <button
          class="footer_button"
          @click="decreaseFontSize"
          :style="{ width: '43px' }"
        >
          <FontSmaller />
        </button>
        <button
          class="footer_button"
          @click="increaseFontSize"
          :style="{ width: '44px' }"
        >
          <FontLouder />
        </button>
      </div>
    </div>
    <div>
      <div class="footer_bottom" :style="{ height: '44px' }">
        <div class="footer_bottom_content1">
          <router-link to="/login">
            <button class="footer_button" :style="{ padding: '0 10px' }">
              로그인
            </button>
          </router-link>
          <button class="footer_button" :style="{ padding: '0 10px' }">
            pc버전
          </button>
          <button
            class="footer_button"
            :style="{ padding: '0 10px' }"
            @click="toTop"
          >
            맨 위로
          </button>
        </div>
      </div>
      <div class="footer_bottom" :style="{ height: '24px' }">
        <div class="footer_bottom_content2">
          <span>이용약관 | 고객정보처리방침 | 고객센터</span>
        </div>
      </div>
      <div class="footer_bottom" :style="{ height: '24px' }">
        <div class="footer_bottom_content2 bold">
          <span>@Zum internet</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Refresh from "@/components/atoms/Refresh.vue";
import FontLouder from "@/components/atoms/FontLouder.vue";
import FontSmaller from "@/components/atoms/FontSmaller.vue";
import { INCREASE_FONT_SIZE, DECREASE_FONT_SIZE } from "@/store/fontsize/index";
import { RootState } from "@/store/index";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "footer-component",
  components: {
    Refresh,
    FontLouder,
    FontSmaller,
  },
  setup() {
    const store = useStore<RootState>();
    const router = useRouter();

    const refresh = () => {
      router.go(0);
    };

    const increaseFontSize = () => {
      store.commit(INCREASE_FONT_SIZE, 1.1);
    };

    const decreaseFontSize = () => {
      store.commit(DECREASE_FONT_SIZE, 1.1);
    };

    const toTop = () => {
      window.scrollTo(0, 0);
    };

    return {
      increaseFontSize,
      decreaseFontSize,
      toTop,
      refresh,
    };
  },
});
</script>

<style lang="scss" scoped>
footer {
  padding: 0 3vw;
  padding-bottom: 1vh;
}

.footer_top {
  @include flex-space-between;
  border-bottom: 1px solid $darker-gray;
  padding: 10px 0;
}

.font_size_controller_wrapper {
  @include flex-align-items-center;
}

.footer_bottom {
  position: relative;

  .footer_bottom_content1 {
    @include absolute-center;
    @include flex-space-between;
    width: 55vw;
  }

  .footer_bottom_content2 {
    @include absolute-center;
    @include flex-justify-content-center;
    color: rgba(0, 0, 0, 0.54);
    font-size: 0.6rem;
    display: flex;
    justify-content: center;
    width: 52vw;
  }

  .bold {
    font-weight: bold;
    font-size: 0.8rem;
  }
}

.footer_button {
  @include flex-center;
  height: 30px;
  background-color: white;
  border: 1px solid $darker-gray;
  color: $light-font-color;
}
</style>
