import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
  Query,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { PostId } from 'custom-type';
import { CommentCredentialsDto } from './dto/comment.dto';
import { CommentEntity } from './comment.entity';

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Get('/:postid')
  getPostCommentById(
    @Param('postid') postid: PostId,
  ): Promise<CommentEntity[]> {
    return this.commentService.getPostCommentById(postid);
  }

  @Post()
  @UsePipes(ValidationPipe)
  setComment(@Body() commentItme: CommentCredentialsDto) {
    return this.commentService.createCommentByPostId(commentItme);
  }

  @Delete('/:id')
  async deleteComment(
    @Param('id', ParseIntPipe) id: number,
    @Query('postid') postId: PostId,
  ) {
    await this.commentService.deleteComment(postId, id);
  }
}
