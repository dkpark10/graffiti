<template>
  <div class="img_wrapper">
    <Skeleton v-show="loading && !error" />
    <div class="error_msg_wrapper" v-show="error">
      <span>이미지를 불러오는데 실패하였습니다.</span>
    </div>
    <img :src="src" @load="onLoad" :alt="alt" @error="onError" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, CSSProperties, ref } from "vue";
import Skeleton from "@/components/atoms/Skeleton.vue";

export default defineComponent({
  name: "image-container",
  components: {
    Skeleton,
  },
  props: {
    src: {
      type: Object as PropType<string>,
      required: true,
    },
    width: {
      type: Object as PropType<CSSProperties["width"]>,
    },
    height: {
      type: Object as PropType<CSSProperties["height"]>,
    },
    alt: {
      type: Object as PropType<string>,
    },
  },
  setup() {
    const loading = ref(true);
    const error = ref(false);

    const onLoad = () => {
      loading.value = false;
    };

    const onError = () => {
      error.value = true;
    };

    return {
      loading,
      error,
      onLoad,
      onError,
    };
  },
});
</script>

<style lang="scss" scoped>
.img_wrapper {
  display: inline-block;
  overflow: hidden;
  width: v-bind("width || '100%'");
  height: v-bind("height || '100%'");

  img,
  div {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .error_msg_wrapper {
    width: 100%;
    height: 100%;
    border: 1px solid $darker-gray;
    color: $font-color;
    text-align: center;
    @include flex-align-items-center;
  }
}
</style>
