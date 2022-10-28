<template>
  <div class="close" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "close-component",
});
</script>

<style lang="scss" scoped>
.close {
  background: url("https://m.hub.zum.com/resources/build/mobile/images/spr_header_190402.png?v=1661217438830")
    no-repeat;
  width: 15px;
  height: 15px;
  overflow: hidden;
  background-position: -74px -22px;
  background-size: 101px 85px;
  display: block;
}
</style>
