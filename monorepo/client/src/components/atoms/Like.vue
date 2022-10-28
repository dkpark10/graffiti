<template>
  <div class="like" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "like-emoticon",
});
</script>

<style lang="scss" scoped>
.like {
  background: url("https://cmnt.zum.com/plugin/zum-comment/images/spr_social_comment_m_20190902.png")
    no-repeat;
  background-size: 111px 102px;
  width: 14px;
  height: 14px;
  background-position: -29px -58px;
  color: rgba(0, 0, 0, 0);
  opacity: 0.85;
}
</style>
