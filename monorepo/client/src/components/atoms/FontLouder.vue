<template>
  <div class="font_louder" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "font-louder-component",
});
</script>

<style lang="scss" scoped>
.font_louder {
  background: url("https://m.hub.zum.com/resources/build/mobile/images/spr_footer_191212.png?v=1661217438830")
    no-repeat;
  background-size: 30px 55px;
}

.font_louder {
  width: 28px;
  height: 15px;
  background-position: 0 -40px;
}
</style>
