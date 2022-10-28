<template>
  <section v-if="store.state.commentModule.commentData.length > 0">
    <div class="comment_sort">
      <button
        type="button"
        :class="{ on_tab: isCurrentTab(0) }"
        @click="commentSortByDate(true, 0)"
      >
        최신순
      </button>
      <button
        type="button"
        :class="{ on_tab: isCurrentTab(1) }"
        @click="commentSortByDate(false, 1)"
      >
        과거순
      </button>
    </div>
    <ul
      v-for="({ author, description, date, like, hate, id }, idx) in store.state
        .commentModule.commentData"
      :key="idx"
    >
      <li>
        <CommentItem
          :commentId="id"
          :postId="postId"
          :author="author"
          :description="description"
          :date="date"
          :like="like"
          :hate="hate"
        />
      </li>
    </ul>
  </section>
  <section class="no_comment" v-else-if="store.state.commentModule.error">
    <Sweat />
    <span>댓글을 불러오지 못했습니다.</span>
  </section>
  <section class="no_comment" v-else>
    <Sweat />
    <span>아직 댓글이 없습니다.</span>
  </section>
</template>

<script setup lang="ts">
import { defineProps, ref, onMounted } from "vue";
import CommentItem from "@/components/molecules/CommentItem.vue";
import Sweat from "@/components/atoms/Sweat.vue";
import { PostId } from "custom-type";
import { useStore } from "vuex";
import { RootState } from "@/store";
import { GET_COMMENT_LIST_ACTION, SORT_COMMENT_DATA } from "@/store/comment";

interface Props {
  postId: PostId;
}

const store = useStore<RootState>();
const props = defineProps<Props>();
const currentSortStatus = ref(0);

const isCurrentTab = (state: number) => state === currentSortStatus.value;

const setSortStatus = (nextSortStatus: number) => {
  currentSortStatus.value = nextSortStatus;
};

const commentSortByDate = (asc: boolean, nextSortStatus: number) => {
  setSortStatus(nextSortStatus);
  store.commit(SORT_COMMENT_DATA, asc);
};

onMounted(() => {
  store.dispatch(GET_COMMENT_LIST_ACTION, props.postId);
});
</script>

<style lang="scss" scoped>
section {
  @include mob-hub-padding;
  background-color: white;
}

.comment_sort {
  @include flex-align-items-center;
  height: 38px;
  border-bottom: 1px solid $darker-gray;

  button {
    margin-right: 2vw;
    color: $font-color;
    font-size: 0.88rem;
  }
}

.main_color {
  background-color: $main-color;
}

.no_comment {
  height: 65px;
  @include flex-center;
  font-size: 0.85rem;
  color: $font-color;
}

.on_tab {
  font-weight: bold;
}
</style>
