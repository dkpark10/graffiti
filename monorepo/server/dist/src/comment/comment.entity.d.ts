import { BaseEntity } from 'typeorm';
import { PostId } from 'custom-type';
export declare class CommentEntity extends BaseEntity {
    id: number;
    postid: PostId;
    author: string;
    description: string;
    date: string;
    like: number;
    hate: number;
}
