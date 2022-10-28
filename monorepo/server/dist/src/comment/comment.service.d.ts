import { Cache } from 'cache-manager';
import { CommentCredentialsDto } from './dto/comment.dto';
import { PostId } from 'custom-type';
import { CommentRepository } from './comment.repository';
import { CommentEntity } from './comment.entity';
export declare class CommentService {
    private readonly commentRepository;
    private readonly cacheManager;
    constructor(commentRepository: CommentRepository, cacheManager: Cache);
    getPostCommentById(postid: PostId): Promise<CommentEntity[]>;
    createCommentByPostId(commentItem: CommentCredentialsDto): Promise<CommentEntity>;
    deleteComment(postid: PostId, id: number): Promise<import("typeorm").DeleteResult>;
    getMockData(): Promise<unknown>;
}
