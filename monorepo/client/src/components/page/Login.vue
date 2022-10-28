<template>
  <div class="login_container">
    <router-link to="/">
      <div class="tohome">홈으로</div>
    </router-link>
    <main>
      <form>
        <fieldset>
          <div class="input_container">
            <label for="inputid"></label>
            <InputText
              id="inputid"
              name="inputid"
              type="text"
              placeholder="아이디 또는 이메일 주소"
              :width="width"
              :height="height"
            />
            <label for="inputpwd"></label>
            <InputText
              id="inputpwd"
              name="inputpwd"
              type="password"
              placeholder="비밀번호"
              :width="width"
              :height="height"
            />
          </div>
          <Button
            type="submit"
            class="login_btn"
            color="white"
            borderRadius="4px"
            :width="width"
            :height="height"
          >
            로그인
          </Button>
        </fieldset>
      </form>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputText from "@/components/atoms/InputText.vue";
import Button from "@/components/atoms/Button.vue";

export default defineComponent({
  name: "login-page",
  components: {
    InputText,
    Button,
  },
  setup() {
    return {
      width: "100%",
      height: "45px",
    };
  },
});
</script>

<style lang="scss" scoped>
.tohome {
  @include flex-center;
  color: black;
  font-size: 1.1rem;
  border: 1px solid $darker-gray;
  height: 40px;
  text-align: center;
}

fieldset {
  border: none;
}
.login_container {
  height: 100vh;
  background-color: white;
  position: relative;
}

main {
  @include absolute-center;
  width: 100%;
  padding: 0 17px;
}

.input_container {
  margin-bottom: 23px;
}

.login_btn {
  background-color: $main-color;
  font-size: 0.9rem;
}
.logo_wrapper {
  width: 48px;
  height: 48px;
  position: relative;
  display: inline-block;
  background-color: $mobile-main-color;
}
</style>
