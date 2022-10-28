<template>
  <header>
    <HeaderTop
      :isShownSearchBar="isShownSearchBar"
      @show-search-bar="showSearchBar"
      @close-search-bar="closeSearchBar"
    />
    <HeaderBottom />
    <SearchBar v-show="isShownSearchBar" />
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HeaderBottom from "@/components/molecules/HeaderBottom.vue";
import HeaderTop from "@/components/molecules/HeaderTop.vue";
import SearchBar from "@/components/molecules/SearchBar.vue";

export default defineComponent({
  name: "HeaderComponent",
  components: {
    HeaderBottom,
    HeaderTop,
    SearchBar,
  },
  setup() {
    const isShownSearchBar = ref(false);
    const showSearchBar = () => {
      isShownSearchBar.value = true;
    };

    const closeSearchBar = () => {
      isShownSearchBar.value = false;
    };

    return {
      isShownSearchBar,
      showSearchBar,
      closeSearchBar,
    };
  },
});
</script>

<style lang="scss" scoped>
header {
  background-color: white;
}
</style>
