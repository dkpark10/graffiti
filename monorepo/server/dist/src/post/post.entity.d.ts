import { BaseEntity } from 'typeorm';
import { PostId } from 'custom-type';
export declare class PostEntity extends BaseEntity {
    id: number;
    postid: PostId;
}
