import { PostId, PostItem, RankedPost } from 'custom-type';
import { Cache } from 'cache-manager';
import { PostEntity } from './post.entity';
import { PostRepository } from './post.repository';
export declare class PostService {
    private readonly postRepository;
    private readonly cacheManager;
    private readonly domain;
    private readonly RANKED_CACHE_KEY;
    private readonly MAIN_CACHE_KEY;
    private mainRequestCount;
    private rankCRequestount;
    constructor(postRepository: PostRepository, cacheManager: Cache);
    getPostById(postid: PostId): PostItem;
    getChannelPost(): PostItem[];
    setCachedMainPost(): Promise<void>;
    getMainPost(): Promise<unknown>;
    setCachedRankedPost(): Promise<void>;
    getRankedPost(): Promise<RankedPost>;
    extracRandomPost(length?: number): PostItem[];
    getSearchResult(keyword: string): PostItem[];
    getReadPost(): Promise<PostItem[]>;
    setReadPost(postid: PostId): Promise<PostEntity[]>;
    delteReadPost(postid: PostId): Promise<void>;
    setCacheTest(): Promise<number>;
}
