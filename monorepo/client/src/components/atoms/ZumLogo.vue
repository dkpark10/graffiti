<template>
  <div class="zum_logo" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "zum_logo-component",
});
</script>

<style lang="scss" scoped>
.zum_logo {
  background: url("https://m.hub.zum.com/resources/build/mobile/images/spr_header_190402.png?v=1661217438830")
    no-repeat;
}

.zum_logo {
  width: 18px;
  height: 18px;
  background-position: 0 0;
  background-size: 101px 85px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
