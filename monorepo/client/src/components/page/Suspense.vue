<template>
  <section>
    <Suspense>
      <template #default>
        <CommentList :post-id="postid" />
      </template>
      <template #fallback>
        <div class="fallback blue">로딩중입니당...........</div>
      </template>
    </Suspense>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import CommentList from "@/components/organisms/CommentList.vue";
import { PostId, PostItem } from "custom-type";
import { useRecentPosts, useFetch } from "@/hooks/index";
import { BASE_URL } from "@/utils";

export default defineComponent({
  name: "post-detail-page",
  components: {
    CommentList,
  },
  setup() {
    const route = useRoute();
    const postid = route.params.id as PostId;
    const recentPost = useRecentPosts();

    const getFetchPostURL = `${BASE_URL}/post/culture_4`;
    const [post, postLoading, postError] = useFetch<PostItem>(getFetchPostURL);

    return {
      postid,
      post,
      postLoading,
      postError,
    };
  },
});
</script>

<style lang="scss" scoped>
article {
  margin: 2vh 0;
  background-color: white;
}
.title {
  @include mob-hub-padding;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
}

.author {
  @include mob-hub-padding;
  text-align: center;
  color: $main-color;
  font-weight: bold;
  margin: 1vh 0;
}

.fallback {
  width: 100vw;
  height: 50vh;
}

.red {
  background-color: red;
}

.blue {
  background-color: blue;
}
</style>
