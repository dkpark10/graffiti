<template>
  <section class="tag_content_wrapper">
    <h4>#{{ parseTitle(0) }}</h4>
    <div class="tag_content">
      <ul v-for="(item, index) in channelData?.slice(0, 4)" :key="index">
        <router-link :to="`post/${item.postId}`">
          <li>
            <TagContentCard
              :imgUrl="item.imgUrl"
              :title="item.title"
              :author="item.author"
              :webkitLineClamp="2"
            />
          </li>
        </router-link>
      </ul>
    </div>
  </section>
  <section class="tag_content_wrapper">
    <h4>#{{ parseTitle(4) }}</h4>
    <div class="tag_content">
      <ul v-for="(item, index) in channelData?.slice(4, 8)" :key="index">
        <router-link :to="`post/${item.postId}`">
          <li>
            <TagContentCard
              :imgUrl="item.imgUrl"
              :title="item.title"
              :author="item.author"
              :webkitLineClamp="2"
            />
          </li>
        </router-link>
      </ul>
    </div>
  </section>
  <section class="tag_content_wrapper">
    <h4>#{{ parseTitle(8) }}</h4>
    <div class="tag_content">
      <ul v-for="(item, index) in channelData?.slice(8)" :key="index">
        <router-link :to="`post/${item.postId}`">
          <li>
            <TagContentCard
              :imgUrl="item.imgUrl"
              :title="item.title"
              :author="item.author"
              :webkitLineClamp="2"
            />
          </li>
        </router-link>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TagContentCard from "@/components/molecules/TagContentCard.vue";
import { BASE_URL } from "@/utils";
import { useFetch } from "@/hooks/index";
import { PostId, PostItem } from "custom-type";

type TagTitle = Capitalize<PostId>;

export default defineComponent({
  name: "tag-contents",
  components: {
    TagContentCard,
  },
  setup() {
    const URL = `${BASE_URL}/post/channel`;
    const [channelData, loading, error] = useFetch<PostItem[]>(URL);

    const parseTitle = (idx: number): TagTitle | string => {
      if (channelData.value === undefined) {
        return "";
      }

      const postid = channelData.value[idx].postId;
      const channelName = postid.split("_")[0];
      return `${channelName[0].toUpperCase()}${channelName.slice(1)}`;
    };

    return {
      channelData,
      loading,
      error,
      parseTitle,
    };
  },
});
</script>

<style lang="scss" scoped>
.tag_content_wrapper {
  @include hub-setion-wrapper;
  background-color: white;

  h4 {
    color: $mobile-main-color;
    margin-bottom: 3vw;
  }
}

.tag_content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px 8px;
}
</style>
