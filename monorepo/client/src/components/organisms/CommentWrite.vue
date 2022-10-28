<template>
  <div>
    <div class="comment_write_wrapper">
      <div class="textarea_header">
        <span class="user">wakandadeveloper</span>
        <span class="comment_length">{{ comment.length }} / 1000</span>
      </div>
      <textarea
        :value="comment"
        @input="onChangeComment"
        placeholder="당신의 생각을 남겨주세요"
      />
      <div class="button_wrapper">
        <span />
        <Button
          @click="submitComment"
          class="main_color"
          type="submit"
          color="white"
          width="59px"
          height="28px"
          borderRadius="18px"
        >
          등록
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { defineProps } from "vue";
import { useInput } from "@/hooks/use_input";
import Button from "@/components/atoms/Button.vue";
import { useRouter } from "vue-router";
import { PostId } from "custom-type";

interface Props {
  postId: PostId;
}
const props = defineProps<Props>();
const [comment, onChangeComment] = useInput({
  init: "",
  validator: (value) => value.length > 1000,
});

const router = useRouter();

const submitComment = async () => {
  await axios.post("http://localhost:3000/comment", {
    postId: props.postId,
    author: "wakandadeveloper",
    description: comment.value,
  });

  router.go(0);
};
</script>

<style lang="scss" scoped>
.comment_write_wrapper {
  @include mob-hub-padding;
  padding-bottom: 8px;
  background-color: white;
  border-top: 1px solid $darker-gray;
  border-bottom: 1px solid $darker-gray;
}

.comment_header {
  @include flex-space-between-align-center;

  .left {
    font-weight: bold;
  }

  .right {
    font-weight: normal;
    font-size: 0.9rem;
  }
}

.textarea_header {
  @include flex-space-between-align-center;
  height: 40px;
  color: $font-color;

  .user {
    color: $main-color;
    font-size: 0.9rem;
    font-weight: bold;
  }

  .comment_length {
    font-size: 0.84rem;
  }
}

textarea {
  @include flex-space-between-align-center;
  width: 100%;
  height: 96px;
  border: none;
  resize: none;

  &:focus {
    outline: none;
  }
}

.button_wrapper {
  margin-top: 10px;
  height: 30px;
  display: flex;
  justify-content: space-between;
}

.main_color {
  background-color: $main-color;
}
</style>
