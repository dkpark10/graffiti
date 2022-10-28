<template>
  <section>
    <Header />
    <article>
      <div v-show="!postLoading && post !== undefined">
        <ImageContainer
          :src="(post?.imgUrl as string)"
          :alt="(post?.title as string)"
          width="100%"
          height="200px"
        />
        <div class="title">{{ post?.title as string }}</div>
        <div class="author"><em>by </em>{{ post?.author as string }}</div>
      </div>
    </article>
    <div class="comment_length">
      전체 댓글 {{ store.state.commentModule.length }}
    </div>
    <CommentWrite :post-id="postid" />
    <CommentList :post-id="postid" />
    <FooterNavigator />
    <Footer />
  </section>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import Header from "@/components/organisms/Header.vue";
import Footer from "@/components/organisms/Footer.vue";
import FooterNavigator from "@/components/molecules/FooterNavigator.vue";
import CommentWrite from "@/components/organisms/CommentWrite.vue";
import CommentList from "@/components/organisms/CommentList.vue";
import ImageContainer from "@/components/atoms/ImageContainer.vue";
import { PostId, PostItem } from "custom-type";
import { useFetch } from "@/hooks/index";
import { BASE_URL } from "@/utils";
import { useStore } from "vuex";
import { RootState } from "@/store";

const store = useStore<RootState>();
const route = useRoute();
const postid = route.params.id as PostId;

const getFetchPostURL = `${BASE_URL}/post/${postid}`;
const [post, postLoading] = useFetch<PostItem>(getFetchPostURL);
</script>

<style lang="scss" scoped>
article {
  margin: 2vh 0;
  padding-bottom: 1vh;
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

.comment_length {
  @include mob-hub-padding;
  background-color: white;
  font-weight: bold;
  padding-top: 1vh;
  padding-bottom: 1vh;
}
</style>
