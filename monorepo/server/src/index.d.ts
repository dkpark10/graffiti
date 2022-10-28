declare module 'custom-type' {
  export interface CustomPost {
    title: string;
    author: string;
    category: string;
  }

  export type Unit = 'px' | '%' | 'vw' | 'vh' | 'vmin' | 'vmax';

  export type SizeUnit = `${number}${Unit}`;

  export type NavText =
    | '홈'
    | '라이프'
    | '푸드'
    | '여행'
    | '컬처'
    | '테크'
    | '비즈'
    | '이슈'
    | '연예';

  export type NavName =
    | ''
    | 'life'
    | 'food'
    | 'trip'
    | 'culture'
    | 'tech'
    | 'biz'
    | 'issue'
    | 'entertainment';

  export type NavUrl = `/${NavName}`;

  export type PostId = `${NavName}_${nubmer}`;

  export interface PostItem {
    postId: PostId;
    imgUrl: string;
    title: string;
    author: string;
  }

  export interface RankedPost {
    updatedMillSec: number;
    date: string;
    rankedPosts: PostItem[];
  }

  export interface Comment {
    commentId: `${PostId}_${number}`;
    description: string;
    author: string;
    date: string;
    like: number;
    hate: number;
  }
}
