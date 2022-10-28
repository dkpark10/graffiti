<template>
  <Header />
  <main>
    <div class="tag_content_wrapper">
      <div class="tag_content">
        <ul v-for="(item, idx) in shwonItem" :key="idx">
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
      <div class="target" ref="targetRef" />
    </div>
  </main>
  <Footer />
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent, onMounted, onUnmounted, watch, ref } from "vue";
import { useRoute } from "vue-router";
import TagContentCard from "@/components/molecules/TagContentCard.vue";
import Header from "@/components/organisms/Header.vue";
import Footer from "@/components/organisms/Footer.vue";
import { BASE_URL } from "@/utils/index";
import { PostItem } from "custom-type";
import { useIntersection } from "@/hooks/use_intersection";
// import { useScroll } from "@/hooks/use_scroll";
// import { useRequestAniFrame } from "@/hooks/use_requestaniframe";

export default defineComponent({
  name: "app",
  components: {
    Header,
    TagContentCard,
    Footer,
  },
  setup() {
    const route = useRoute();
    let beginIndexofFetchData = 0;
    let category = route.params.category;
    let totalItem: PostItem[] = [];

    const countOfFetchData = 8;
    const targetRef = ref<Element>();

    const shwonItem = ref<PostItem[]>([]);
    const itemLength = 72;

    const fetchData = async () => {
      const { data } = await axios.get<PostItem[]>(`${BASE_URL}/${category}`);
      beginIndexofFetchData = 0;
      totalItem = data;
      shwonItem.value = totalItem.slice(0, 8);
    };

    watch(
      () => route.params.category,
      async (newParam) => {
        category = newParam;
        window.scrollTo(0, 0);
        fetchData();
      }
    );

    const getMoreData = () => {
      if (shwonItem.value.length >= itemLength) {
        return;
      }

      beginIndexofFetchData += countOfFetchData;
      shwonItem.value = [
        ...shwonItem.value,
        ...totalItem.slice(
          beginIndexofFetchData,
          beginIndexofFetchData + countOfFetchData
        ),
      ];
    };

    const observer = useIntersection(getMoreData, {
      threshold: 0.45,
    });

    onMounted(() => {
      fetchData();
      observer.observe(targetRef.value as Element);
    });

    onUnmounted(() => {
      if (targetRef.value) {
        observer.unobserve(targetRef.value as Element);
      }
    });

    return {
      shwonItem,
      targetRef,
      countOfFetchData,
      beginIndexofFetchData,
    };
  },
});
</script>

<style lang="scss">
.tag_content_wrapper {
  @include hub-setion-wrapper;
  margin: 0;
  background-color: white;
}

.tag_content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 8px;
}
</style>
