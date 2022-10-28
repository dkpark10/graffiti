<template>
  <nav :class="{ nav_fixed: showElementFixed }">
    <Carousel
      :breakpoints="breakpoints"
      :style="{ width: '100%' }"
      :transition="100"
    >
      <Slide v-for="(menuItem, idx) in menuItems" :key="idx">
        <router-link :to="menuItem.url">
          <span
            class="navi_item"
            :class="{ on_tab: isCurrentTab(menuItem.url) }"
            @click="onClickMenu(menuItem.url)"
            @keydown="onClickMenu(menuItem.url)"
          >
            {{ menuItem.text }}
          </span>
        </router-link>
      </Slide>
    </Carousel>
  </nav>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { NavText, NavUrl } from "custom-type";
import { RootState } from "@/store/index";
import { SET_CURRENT_TAB } from "@/store/ui/index";
import { useStore } from "vuex";

interface MenuItem {
  text: NavText;
  url: NavUrl;
}

interface BreakPoints {
  [key: number]: {
    itemsToShow: number;
    snapAlign: string;
  };
}

export default defineComponent({
  name: "header-bottom",
  components: {
    Carousel,
    Slide,
  },
  setup() {
    const menuItems: MenuItem[] = [
      {
        text: "홈",
        url: "/",
      },
      {
        text: "라이프",
        url: "/life",
      },
      {
        text: "푸드",
        url: "/food",
      },
      {
        text: "여행",
        url: "/trip",
      },
      {
        text: "컬처",
        url: "/culture",
      },
      {
        text: "테크",
        url: "/tech",
      },
      {
        text: "비즈",
        url: "/biz",
      },
      {
        text: "이슈",
        url: "/issue",
      },
      {
        text: "연예",
        url: "/entertainment",
      },
    ];

    const showElementFixed = ref(false);
    const store = useStore<RootState>();

    const onScrollEvent = () => {
      if (window.pageYOffset <= 48) {
        showElementFixed.value = false;
        return;
      }
      showElementFixed.value = true;
    };

    const onClickMenu = (url: NavUrl) => {
      store.commit(SET_CURRENT_TAB, url);
    };

    const isCurrentTab = (url: NavUrl) => {
      return store.state.uiModule.currentTab === url;
    };

    onMounted(() => {
      document.addEventListener("scroll", onScrollEvent);
    });

    onUnmounted(() => {
      document.removeEventListener("scroll", onScrollEvent);
    });

    const breakpoints: BreakPoints = {
      325: {
        itemsToShow: 7.5,
        snapAlign: "start",
      },
      455: {
        itemsToShow: 9,
        snapAlign: "start",
      },
    };

    return {
      menuItems,
      selectedMenuItemIndex: 0,
      showElementFixed,
      breakpoints,
      onClickMenu,
      isCurrentTab,
    };
  },
});
</script>

<style lang="scss" scoped>
.on_tab {
  color: $main-color;
  font-weight: bold;
}

a {
  color: $nav-font-color;
}

nav {
  height: 45px;
  background-color: white;
  display: flex;
  align-items: center;
}

.nav_fixed {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}

.navi_item {
  display: inline-block;
  min-width: 72px;
  font-weight: bold;
  font-size: 17px;
}
</style>
