<template>
  <div id="app">
    <router-view :key="route.fullPath" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "app",
  setup() {
    const route = useRoute();
    return {
      route,
    };
  },
});
</script>

<style lang="scss">
*,
*::before,
*::after {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  list-style: none;
  vertical-align: baseline;
}

body {
  background-color: #eef0f2;
}

button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: $nav-font-color;
}
</style>
