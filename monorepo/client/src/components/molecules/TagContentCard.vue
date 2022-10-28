<template>
  <article>
    <ImageContainer height="120px" :src="(imgUrl as string)" :alt="title" />
    <strong class="title_wrapper" :style="titleStyle">{{ title }}</strong>
    <div class="author_wrapper" :style="authorStyle">
      <em>by</em>
      {{ author }}
    </div>
  </article>
</template>

<script setup lang="ts">
import ImageContainer from "@/components/atoms/ImageContainer.vue";
import { defineProps } from "vue";
import { useFontSize } from "@/hooks/use_fontsize";

interface Props {
  imgUrl: string;
  title: string;
  author: string;
  webkitLineClamp: number;
}

defineProps<Props>();
const titleStyle = useFontSize(15);
const authorStyle = useFontSize(12);
</script>

<style lang="scss" scoped>
strong {
  @include word-ellipsis;
  color: $font-color;
  font-weight: normal;
  display: -webkit-box;
  -webkit-line-clamp: v-bind(webkitLineClamp);
  -webkit-box-orient: vertical;
}

.author_wrapper {
  font-size: 0.87rem;
  color: $mobile-main-color;
}
</style>
