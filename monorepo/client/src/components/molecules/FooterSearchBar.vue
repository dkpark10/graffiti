<template>
  <div class="margin_search_bar">
    <div>찾고 싶은 허브글을 검색하세요</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "footer-search-bar",
});
</script>

<style lang="scss" scoped>
.margin_search_bar {
  @include margin-y-axis;
  background-color: white;
  padding: 20px 10px;
}
</style>
