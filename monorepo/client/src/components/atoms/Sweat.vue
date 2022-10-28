<template>
  <div class="sweat" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "sweat-emoticon",
});
</script>

<style lang="scss" scoped>
.sweat {
  background: url("https://cmnt.zum.com/plugin/zum-comment/images/spr_social_comment_m_20190902.png")
    no-repeat 0 -58px;
  background-size: 111px 102px;
  width: 21px;
  height: 22px;
  color: rgba(0, 0, 0, 0);
  opacity: 0.85;
}
</style>
