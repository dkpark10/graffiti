<template>
  <input :style="style" />
</template>

<script lang="ts">
import { defineComponent, PropType, CSSProperties } from "vue";

export default defineComponent({
  name: "input-text-component",
  props: {
    width: {
      type: Object as PropType<CSSProperties["width"]>,
    },
    height: {
      type: Object as PropType<CSSProperties["height"]>,
    },
  },
  setup(props) {
    const style = {
      width: props.width,
      height: props.height,
    };

    return {
      style,
    };
  },
});
</script>

<style lang="scss" scoped>
input {
  outline: none;
  border-radius: 4px;
  border: 1px solid #dfdfdf;
  padding: 0 8px;
}
</style>
