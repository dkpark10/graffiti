<template>
  <div class="main_content_wrapper" v-if="!mainData && mainLoading">
    <Skeleton />
  </div>
  <div class="main_content_wrapper" v-else>
    <Carousel
      :style="{ width: '100%' }"
      :transition="100"
      :breakpoints="breakpoints"
    >
      <Slide v-for="(menuItem, idx) in mainData" :key="idx">
        <router-link :to="`/post/${menuItem.postId}`">
          <div class="main_content_item_wrapper">
            <Overlay />
            <strong class="main_content_text">
              {{ parsingTitle(menuItem.title, 0) }}
              <br />
              {{ parsingTitle(menuItem.title, 1) }}
            </strong>
            <div class="author_wrapper">
              <em>by</em>
              {{ menuItem.author }}
            </div>
            <ImageContainer
              height="100%"
              :src="menuItem.imgUrl"
              :alt="menuItem.title"
            />
          </div>
        </router-link>
      </Slide>
    </Carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import ImageContainer from "@/components/atoms/ImageContainer.vue";
import Skeleton from "@/components/atoms/Skeleton.vue";
import Overlay from "@/components/atoms/Overlay.vue";
import { BASE_URL } from "@/utils";
import { useFetch } from "@/hooks/index";
import { PostItem } from "custom-type";

interface BreakPoints {
  [width: number]: {
    itemsToShow: number;
    snapAlign: string;
  };
}

export default defineComponent({
  name: "main-content",
  components: {
    Carousel,
    Slide,
    ImageContainer,
    Overlay,
    Skeleton,
  },
  setup() {
    const breakpoints: BreakPoints = {
      1: {
        itemsToShow: 1.2,
        snapAlign: "start",
      },
    };

    const [mainData, mainLoading, mainError] = useFetch<PostItem[]>(
      `${BASE_URL}/post/main`
    );

    const parsingTitle = (title: string, idx: number) => {
      return title.split("\n")[idx];
    };

    return {
      breakpoints,
      parsingTitle,
      mainData,
      mainLoading,
      mainError,
    };
  },
});
</script>

<style lang="scss" scoped>
.main_content_wrapper {
  margin: 2vw 0;
}

.main_content_item_wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.main_content_text {
  @include absolute-center;
  @include word-ellipsis;
  text-align: center;
  color: white;
  font-size: 1.1rem;
  width: 67%;
  font-weight: bold;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.author_wrapper {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.94rem;
  color: rgba(255, 255, 255, 0.81);

  em {
    color: rgba(255, 255, 255, 0.67);
  }
}
</style>
