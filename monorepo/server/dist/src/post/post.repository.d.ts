import { Repository } from 'typeorm';
import { PostEntity } from './post.entity';
export declare class PostRepository extends Repository<PostEntity> {
    test(): void;
}
