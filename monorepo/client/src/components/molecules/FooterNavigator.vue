<template>
  <div class="footer_navi">
    <nav v-for="(item, idx) in menuItems" :key="idx">
      <router-link :to="item.url">
        <div :style="fontSizeStyle">
          {{ item.text }}
        </div>
      </router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NavText, NavUrl } from "custom-type";
import { useFontSize } from "@/hooks/use_fontsize";

type FooterNavText = Exclude<NavText, "홈">;
type FooterNavURL = Exclude<NavUrl, "/">;

interface MenuItem {
  text: FooterNavText;
  url: FooterNavURL;
}

export default defineComponent({
  name: "footer-component",
  setup() {
    const fontSizeStyle = useFontSize(14);
    const menuItems: MenuItem[] = [
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

    return {
      fontSizeStyle,
      menuItems,
    };
  },
});
</script>

<style lang="scss" scoped>
.footer_navi {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  margin: 1rem 0;
}

nav {
  @include flex-center;
  height: 40px;
  background-color: white;
  font-size: 0.9rem;
}
</style>
