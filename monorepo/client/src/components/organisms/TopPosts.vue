<template>
  <section class="top_posts_wrapper">
    <h4>인기허브글</h4>
    <ul v-for="(rankItem, idx) in rankItems?.rankedPosts" :key="idx">
      <router-link :to="`post/${rankItem.postId}`">
        <li>
          <PostInfo
            :show-rank="true"
            :title="rankItem.title"
            :author="rankItem.author"
          >
            <span> {{ idx + 1 }} </span>
          </PostInfo>
        </li>
      </router-link>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostInfo from "@/components/molecules/PostInfo.vue";
import { RankedPost } from "custom-type";
import { BASE_URL } from "@/utils/index";
import { useFetch } from "@/hooks/index";

export default defineComponent({
  name: "top-posts",
  components: {
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
.top_posts_wrapper {
  @include hub-setion-wrapper;
  background-color: white;
  margin-top: 10px;

  h4 {
    margin-bottom: 3vw;
  }
}

ul li {
  padding: 11px 0;
  border-top: 1px solid $line-color;
}
</style>
