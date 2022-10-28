import {
  Inject,
  Injectable,
  CACHE_MANAGER,
  InternalServerErrorException,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CommentCredentialsDto } from './dto/comment.dto';
import { PostId } from 'custom-type';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentRepository } from './comment.repository';
import { CommentEntity } from './comment.entity';
import { parsingDate, getRandomLess50 } from '@/utils';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentRepository: CommentRepository,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}

  async getPostCommentById(postid: PostId): Promise<CommentEntity[]> {
    if (getRandomLess50()) {
      throw new ServiceUnavailableException('댓글 가져오기 실패 랜덤 50');
    }

    const commentList = await this.commentRepository.find({
      where: { postid },
    });

    return commentList;
  }

  async createCommentByPostId(
    commentItem: CommentCredentialsDto,
  ): Promise<CommentEntity> {
    const { author, description, postId } = commentItem;
    const newComment = this.commentRepository.create({
      author,
      description,
      postid: postId,
      like: 0,
      hate: 0,
      date: parsingDate(),
    });

    await this.commentRepository.save(newComment);
    return newComment;
  }

  async deleteComment(postid: PostId, id: number) {
    console.log(postid, id);
    const result = await this.commentRepository
      .createQueryBuilder()
      .delete()
      .from(CommentEntity)
      .where('id = :id and postid = :postid', {
        id,
        postid,
      })
      .execute();

    if (result.affected === 0) {
      throw new NotFoundException('삭제할 댓글이 없습니다.');
    }

    return result;
  }

  async getMockData() {
    const data = {
      author: 'author',
      description: 'description',
      like: 0,
      hate: 0,
      date: parsingDate(),
    };

    try {
      await this.cacheManager.set('life_0', [data, data, data]);
    } catch (e) {
      throw new InternalServerErrorException('댓글을 생성하지 못함');
    }

    return await this.cacheManager.get('life_0');
  }
}
