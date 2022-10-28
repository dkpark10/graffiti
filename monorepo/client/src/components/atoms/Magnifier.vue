<template>
  <div class="magnifier" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "magnifier-component",
});
</script>

<style lang="scss" scoped>
.magnifier {
  background: url("https://m.hub.zum.com/resources/build/mobile/images/spr_header_190402.png?v=1661217438830")
    no-repeat;
  width: 20px;
  height: 19px;
  overflow: hidden;
  background-position: -25px -22px;
  background-size: 101px 85px;
  display: block;
}
</style>
