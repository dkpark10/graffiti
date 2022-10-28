import { PostService } from './post.service';
import { PostId, PostItem, RankedPost } from 'custom-type';
import { PostEntity } from './post.entity';
export declare class PostController {
    private postService;
    constructor(postService: PostService);
    getMainPost(): Promise<unknown>;
    getChannelPost(): PostItem[];
    getRankedPost(): Promise<RankedPost>;
    getSearchResult(keyword: string): PostItem[];
    getReadPost(): Promise<PostItem[]>;
    setCacheTest(): Promise<number>;
    getPostById(postid: PostId): PostItem;
    setReadPost(postid: PostId): Promise<PostEntity[]>;
}
