/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

/* eslint-disable */
declare module 'custom-type' {
  export interface CustomPost {
    title: string;
    author: string;
    category: string;
  }
  
  export type Unit = "px" | "%" | "vw" | "vh" | "vmin" | "vmax";

  export type SizeUnit = `${number}${Unit}`;
  
  export type NavText =
  | "홈"
  | "라이프"
  | "푸드"
  | "여행"
  | "컬처"
  | "테크"
  | "비즈"
  | "이슈"
  | "연예";

  export type NavName =
  | ""
  | "life"
  | "food"
  | "trip"
  | "culture"
  | "tech"
  | "biz"
  | "issue"
  | "entertainment";

  export type NavUrl = `/${NavName}`;
  
  export type PostId = `${NavName}_${nubmer}`;

  export interface PostItem {
    postId: PostId;
    imgUrl: string;
    title: string;
    author: string;
  };

  export interface RankedPostItem extends PostItem {
    rank: number;
  };

  export interface RankedPost {
    date: string;
    rankedPosts: RankedPostItem[];
  }

  export type CommentDate = `${number}.${number}.${number} ${number}:${number}`;

  export interface Comment {
    id: number;
    postid: `${PostId}_${number}`;
    description: string;
    author: string;
    date: CommentDate;
    like: number;
    hate: number;
  };
}

declare module 'carousel-type' {
  export interface BreakPoints {
    [width: number]: {
      itemsToShow: number;
      snapAlign: string;
    }
  }
}
