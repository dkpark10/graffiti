<template>
  <HeaderTop />
  <div class="title_wrapper">
    <span>최근 읽은 글</span>
  </div>
  <main v-if="data && data.length > 0">
    <div class="content_wrapper">
      <ul v-for="(item, idx) in data" :key="idx">
        <router-link :to="`post/${item.postId}`">
          <li>
            <ImageContainer
              width="100%"
              height="140px"
              :src="item.imgUrl"
              :alt="item.title"
            />
            <PostInfo
              :showRank="false"
              :title="item.title"
              :author="item.author"
            />
          </li>
        </router-link>
      </ul>
    </div>
  </main>
  <main v-else>
    <div class="content_wrapper">
      <Sweat />
      읽은 글이 없습니다.
    </div>
  </main>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderTop from "@/components/molecules/HeaderTop.vue";
import Footer from "@/components/organisms/Footer.vue";
import ImageContainer from "@/components/atoms/ImageContainer.vue";
import PostInfo from "@/components/molecules/PostInfo.vue";
import Sweat from "@/components/atoms/Sweat.vue";
import { BASE_URL } from "@/utils/index";
import { useFetch } from "@/hooks/index";
import { PostItem } from "custom-type";

export default defineComponent({
  name: "recent-read-post",
  components: {
    Footer,
    HeaderTop,
    ImageContainer,
    PostInfo,
    Sweat,
  },
  setup() {
    const URL = `${BASE_URL}/post/read`;
    const [data, loading, error] = useFetch<PostItem[]>(URL);
    return {
      data,
    };
  },
});
</script>

<style lang="scss" scoped>
.title_wrapper {
  color: $mobile-main-color;
  font-size: 1.45rem;
  font-weight: normal;
  position: relative;
  height: 80px;

  span {
    @include absolute-center;
  }
}
.content_wrapper {
  @include hub-setion-wrapper;
  margin: 0;
  background-color: white;
  text-align: v-bind("data ? 'none' : 'center'");
}

ul li {
  margin-bottom: 15px;
}
</style>
