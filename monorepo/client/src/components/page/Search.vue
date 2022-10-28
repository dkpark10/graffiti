<template>
  <HeaderTop />
  <SearchBar :init-keyword="keyword" />
  <main>
    <div class="noresult" v-if="serachResult.length === 0">
      검색결과가 없습니다.
    </div>
    <div v-else class="tag_content_wrapper">
      <div class="result_len">
        <strong>{{ serachResult.length }}</strong>
        개의 허브글이 있습니다.
      </div>
      <ul v-for="(item, idx) in serachResult" :key="idx">
        <li>
          <ImageContainer
            width="100%"
            height="160px"
            :src="item.imgUrl"
            :alt="item.title"
          />
          <PostInfo
            :show-rank="false"
            :title="item.title"
            :author="item.author"
          >
          </PostInfo>
        </li>
      </ul>
    </div>
  </main>
  <Footer />
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent, ref, onMounted } from "vue";
import HeaderTop from "@/components/molecules/HeaderTop.vue";
import ImageContainer from "@/components/atoms/ImageContainer.vue";
import Footer from "@/components/organisms/Footer.vue";
import PostInfo from "@/components/molecules/PostInfo.vue";
import SearchBar from "@/components/molecules/SearchBar.vue";
import { PostItem } from "custom-type";
import { useRoute } from "vue-router";
import { BASE_URL } from "@/utils/index";

export default defineComponent({
  name: "ranking-page",
  components: {
    Footer,
    HeaderTop,
    ImageContainer,
    PostInfo,
    SearchBar,
  },
  setup() {
    const route = useRoute();
    const keyword = route.params.keyword as string;
    const serachResult = ref<PostItem[]>([]);

    const getSearchResult = async () => {
      const { data } = await axios.get<PostItem[]>(
        `${BASE_URL}/post/search/${keyword}`
      );
      serachResult.value = data;
    };

    onMounted(() => {
      getSearchResult();
    });

    return {
      keyword,
      serachResult,
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

.noresult {
  margin: 2vh;
  background-color: white;
  height: 100px;
  color: $font-color;
  @include flex-center;
}

.result_len {
  @include flex-align-items-center;
  padding: 0 9px;
  background-color: $mobile-main-color;
  color: white;
  font-size: 0.97rem;
  height: 36px;
  margin-bottom: 10px;
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
