import { Repository } from 'typeorm';
import { CommentEntity } from './comment.entity';
export declare class CommentRepository extends Repository<CommentEntity> {
    test(): void;
}
