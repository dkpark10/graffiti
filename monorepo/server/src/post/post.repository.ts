import { EntityRepository, Repository } from 'typeorm';
import { PostEntity } from './post.entity';

@EntityRepository(PostEntity)
export class PostRepository extends Repository<PostEntity> {
  test() {
    console.log('레퍼지터리 왜 함수 없데??');
  }
}
