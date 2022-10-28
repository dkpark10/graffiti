<template>
  <span class="refresh" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "refresh-component",
});
</script>

<style lang="scss" scoped>
.refresh {
  background: url("https://m.hub.zum.com/resources/build/mobile/images/spr_footer_191212.png?v=1661217438830");
  background-size: 30px 55px;
}

.refresh {
  width: 17px;
  height: 18px;
  background-position: 0 0;
  display: block;
}
</style>
