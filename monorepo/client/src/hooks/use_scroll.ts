import { throttle } from "@/utils/index";

export const useScroll = (callback: () => void) => {
  const onScrollEventHandler = throttle(() => {
    const { innerHeight } = window;
    const {
      documentElement: { scrollTop, offsetHeight },
    } = document;

    if (innerHeight + scrollTop >= offsetHeight) {
      callback();
    }
  }, 150);

  document.addEventListener("scroll", onScrollEventHandler);
};
