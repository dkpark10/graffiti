<template>
  <HeaderTop />
  <main>
    <div class="tag_content_wrapper">
      <div class="page_title_wrapper">
        <div class="page_title">인기 허브글</div>
        <span class="date">{{ rankItems?.date }} 기준</span>
      </div>
      <ul v-for="(item, idx) in rankItems?.rankedPosts" :key="idx">
        <li>
          <ImageContainer
            width="100%"
            height="160px"
            :src="item.imgUrl"
            :alt="item.title"
          />
          <PostInfo :show-rank="true" :title="item.title" :author="item.author">
            <span> {{ idx + 1 }} </span>
          </PostInfo>
        </li>
      </ul>
    </div>
  </main>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderTop from "@/components/molecules/HeaderTop.vue";
import ImageContainer from "@/components/atoms/ImageContainer.vue";
import Footer from "@/components/organisms/Footer.vue";
import PostInfo from "@/components/molecules/PostInfo.vue";
import { RankedPost } from "custom-type";
import { useFetch } from "@/hooks/index";
import { BASE_URL } from "@/utils/index";

export default defineComponent({
  name: "ranking-page",
  components: {
    Footer,
    HeaderTop,
    ImageContainer,
    PostInfo,
  },
  setup() {
    const [rankItems, loading, error] = useFetch<RankedPost>(
      `${BASE_URL}/post/ranking`
    );

    return {
      rankItems,
      loading,
      error,
    };
  },
});
</script>

<style lang="scss" scoped>
.tag_content_wrapper {
  @include hub-setion-wrapper;
  margin: 0;
  background-color: white;
}

.page_title_wrapper {
  @include flex-space-between-align-center;
  span {
    @include date;
  }
}
.page_title {
  font-size: 1.1rem;
  font-weight: bold;
  color: $font-color;
  margin-bottom: 13px;
}

ul li {
  margin-bottom: 15px;
}
</style>
