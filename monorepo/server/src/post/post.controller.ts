import { Controller, Get, Param, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { PostId, PostItem, RankedPost } from 'custom-type';
import { PostEntity } from './post.entity';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get('/main')
  async getMainPost() {
    return await this.postService.getMainPost();
  }

  @Get('/channel')
  getChannelPost() {
    return this.postService.getChannelPost();
  }

  @Get('/ranking')
  async getRankedPost(): Promise<RankedPost> {
    return await this.postService.getRankedPost();
  }

  @Get('/search/:keyword')
  getSearchResult(@Param('keyword') keyword: string): PostItem[] {
    return this.postService.getSearchResult(keyword);
  }

  @Get('/read')
  getReadPost(): Promise<PostItem[]> {
    return this.postService.getReadPost();
  }

  @Get('/test')
  setCacheTest() {
    return this.postService.setCacheTest();
  }

  @Get('/:postid')
  getPostById(@Param('postid') postid: PostId): PostItem {
    return this.postService.getPostById(postid);
  }

  @Post('/read/:postid')
  setReadPost(@Param('postid') postid: PostId): Promise<PostEntity[]> {
    return this.postService.setReadPost(postid);
  }
}
