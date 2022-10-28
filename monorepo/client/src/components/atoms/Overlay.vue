<template>
  <div class="overlay" :style="style" />
</template>

<script lang="ts">
import { defineComponent, PropType, CSSProperties } from "vue";

interface Status {
  style: CSSProperties;
}

export default defineComponent({
  name: "overlay-component",
  props: {
    zIndex: {
      type: Object as PropType<CSSProperties["zIndex"]>,
    },
  },
  setup(props): Status {
    return {
      style: {
        zIndex: props.zIndex || 0,
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.overlay {
  width: 100%;
  height: 100%;
  background-color: $overlay-background-color;
  opacity: 0.4;
  position: fixed;
}
</style>
