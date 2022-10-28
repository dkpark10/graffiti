<template>
  <div class="comment_item_wrapper">
    <div class="comment_author">
      <span class="dot" />
      {{ parsedAuthor }}
    </div>
    <div class="comment_description">
      <p>
        {{ description }}
      </p>
    </div>
    <div class="comment_handler">
      <div class="comment_date">
        {{ date }}
        <button @click="deleteComment">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { computed, defineProps } from "vue";
import { Comment, PostId } from "custom-type";
import { BASE_URL } from "@/utils/index";
import { useRouter } from "vue-router";

interface Props {
  author: string;
  description: string;
  date: string;
  like: number;
  hate: number;
  commentId: Comment["id"];
  postId: PostId;
}
const props = defineProps<Props>();
const router = useRouter();

const parsedAuthor = computed(() => `${props.author?.slice(0, -3)}****`);
const deleteComment = async () => {
  const { commentId, postId } = props;
  const DELETE_URL = `${BASE_URL}/comment/${commentId}?postid=${postId}`;
  await axios.delete(DELETE_URL);
  router.go(0);
};
</script>

<style lang="scss" scoped>
.dot {
  display: inline-block;
  background-color: $main-color;
  border-color: $main-color;
  width: 7px;
  height: 7px;
  border: 1px solid #dadada;
  border-radius: 4px;
}

.comment_item_wrapper {
  padding: 8px 0;
  background-color: white;
  border-bottom: 1px solid $darker-gray;
}

.comment_author {
  color: $main-color;
  font-weight: bold;
  font-size: 0.94rem;
  height: 25px;
}

.comment_description {
  margin: 1% 0;
  font-size: 0.94rem;
}

.comment_date {
  @include date;

  button {
    font-size: inherit;
    color: inherit;
  }
}

.comment_handler {
  @include flex-space-between;
  margin: 2% 0;
  font-size: 0.8rem;

  .likehate {
    width: 25%;
    @include flex-space-evenly;
  }
}
</style>
