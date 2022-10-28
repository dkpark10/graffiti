import { AxiosRequestConfig } from "axios";
import { httpFetchData } from "@/utils/apihandler";
import { ref, Ref } from "vue";

type Return<T> = [Ref<T | undefined>, Ref<boolean>, Ref<boolean>];

export const useFetch = <T>(
  url: string,
  option?: AxiosRequestConfig
): Return<T> => {
  const data = ref<T>();
  const loading = ref(true);
  const error = ref(false);

  const fetch = async () => {
    try {
      const response = await httpFetchData<T>(url, option);
      data.value = response.data;
    } catch (e) {
      error.value = true;
    } finally {
      loading.value = false;
      console.log(`api 요청 : ${url}`);
    }
  };

  fetch();

  return [data, loading, error];
};
