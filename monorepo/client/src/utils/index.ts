import { PostId, CommentDate } from "custom-type";
import { RECENT_POST_KEY } from "@/hooks/use_recent_post";

export const isServerEnv = typeof window === "undefined";

export const BASE_URL = "http://localhost:3000";

// eslint-disable-next-line
export const debounce = (callback: (args?: any) => void, delay: number) => {
  let timer: number | undefined = undefined;
  // eslint-disable-next-line
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(args);
    }, delay);
  };
};

// eslint-disable-next-line
export const throttle = (callback: (args?: any) => void, delay: number) => {
  let waiting = false;
  // eslint-disable-next-line
  return (...args: any) => {
    if (!waiting) {
      callback(args);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, delay);
    }
  };
};

const duplicateRecentPostCheck = (postList: string[], postId: string) => {
  return postList.filter((item) => item !== postId);
};

export const setRecentPost = (recentPost: PostId[] | null, postId: PostId) => {
  if (typeof window === "undefined") {
    return;
  }

  if (recentPost === null) {
    localStorage.setItem(RECENT_POST_KEY, JSON.stringify([postId]));
    return;
  }

  const newRecentPost = duplicateRecentPostCheck(recentPost, postId);
  newRecentPost.push(postId);
  localStorage.setItem(RECENT_POST_KEY, JSON.stringify(newRecentPost));
};

export const calculDate = (date: CommentDate): number => {
  const [d, t] = date.split(" ");
  const dd = d
    .split(".")
    .map((s) => Number(s))
    .reduce((acc, num) => acc + num, 0);

  const tt = t
    .split(":")
    .map((s) => Number(s))
    .reduce((acc, num) => acc + num, 0);

  return dd + tt;
};
