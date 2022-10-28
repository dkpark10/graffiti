<template>
  <div>
    <Overlay @click="closeSideMenu" :zIndex="2" />
    <nav>
      <ul>
        <router-link to="/">
          <li>허브홈</li>
        </router-link>
        <router-link to="/ranking">
          <li>인기 허브 글</li>
        </router-link>
        <router-link to="/recent">
          <li>최근 읽은 글({{ recentReadPostsLength }})</li>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Overlay from "@/components/atoms/Overlay.vue";
import { useStore } from "vuex";
import { BASE_URL } from "@/utils";
import { httpFetchData } from "@/utils/apihandler";
import { SET_RECENT_READ_POST_LEN } from "@/store/ui";
import { RootState } from "@/store/index";
import { PostItem } from "custom-type";

export default defineComponent({
  name: "side-menu",
  components: {
    Overlay,
  },
  setup(_, { emit }) {
    const store = useStore<RootState>();
    const closeSideMenu = () => {
      emit("close-side-menu");
    };
    const recentReadPostsLength = ref(store.state.uiModule.recentReadPostsLen);

    return {
      recentReadPostsLength,
      closeSideMenu,
    };
  },
});
</script>

<style lang="scss" scoped>
.side_menu_wrapper {
  display: flex;
}

nav {
  width: 47vw;
  height: 100%;
  position: fixed;
  background-color: white;
  color: $mobile-main-color;
  top: 0;
  left: 59%;
  z-index: 2;
  font-size: 1.1rem;
  padding: 20px;

  ul li {
    margin: 10px 0px;
  }
}

a {
  color: $mobile-main-color;
}
</style>
