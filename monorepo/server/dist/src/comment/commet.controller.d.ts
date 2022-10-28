import { CommentService } from './comment.service';
import { PostId } from 'custom-type';
import { CommentCredentialsDto } from './dto/comment.dto';
import { CommentEntity } from './comment.entity';
export declare class CommentController {
    private commentService;
    constructor(commentService: CommentService);
    getPostCommentById(postid: PostId): Promise<CommentEntity[]>;
    setComment(commentItme: CommentCredentialsDto): Promise<CommentEntity>;
    deleteComment(id: number, postId: PostId): Promise<void>;
}
