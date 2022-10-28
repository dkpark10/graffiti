<template>
  <button type="button">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, CSSProperties, PropType } from "vue";

export default defineComponent({
  name: "button-component",
  props: {
    width: {
      type: Object as PropType<CSSProperties["width"]>,
    },
    height: {
      type: Object as PropType<CSSProperties["height"]>,
    },
    backgroundColor: {
      type: Object as PropType<CSSProperties["backgroundColor"]>,
    },
    color: {
      type: Object as PropType<CSSProperties["color"]>,
    },
    borderRadius: {
      type: Object as PropType<CSSProperties["borderRadius"]>,
    },
    hoverColor: {
      type: Object as PropType<string>,
    },
  },
});
</script>

<style lang="scss" scoped>
button {
  border: none;
  cursor: pointer;
  width: v-bind(width);
  height: v-bind(height);
  background-color: v-bind(backgroundColor);
  color: v-bind(color);
  border-radius: v-bind(borderRadius);

  &:hover {
    background-color: v-bind(hoverColor);
  }
}
</style>
