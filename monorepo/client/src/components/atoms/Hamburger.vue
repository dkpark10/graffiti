<template>
  <span class="hamburger"> </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "hamburger-button",
});
</script>

<style lang="scss" scoped>
button {
  border: none;
}
.hamburger {
  position: relative;
  display: block;
  width: 20px;
  height: 16px;
  border-top: 2px solid $mobile-main-color;
  border-bottom: 2px solid $mobile-main-color;
  border-radius: 1px;

  &::after {
    width: 20px;
    height: 5px;
    border-bottom: 2px solid $mobile-main-color;
    position: absolute;
    top: 2px;
    left: 0px;
    display: block;
    content: "";
  }
}
</style>
