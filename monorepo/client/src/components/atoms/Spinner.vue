<template>
  <div class="loader"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "spinner-component",
});
</script>

<style lang="scss" scoped>
.loader {
  margin: 5% auto;
  height: 56px;
  width: 56px;
  border: 6px solid white;

  border: {
    right-color: $main-color;
    top-color: $main-color;
    radius: 100%;
  }

  animation: spin 800ms infinite linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}
</style>
