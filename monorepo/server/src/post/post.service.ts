import { Injectable, CACHE_MANAGER, Inject } from '@nestjs/common';
import { mockData } from '@/assets/hubmock/index';
import { PostId, NavName, PostItem, RankedPost } from 'custom-type';
import { Cache } from 'cache-manager';
import { Cron, CronExpression } from '@nestjs/schedule';
import { parsingDate } from '@/utils';
import { PostEntity } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
  private readonly domain: Exclude<NavName, ''>[] = [
    'life',
    'food',
    'trip',
    'culture',
    'tech',
    'biz',
    'issue',
    'entertainment',
  ];
  private readonly RANKED_CACHE_KEY = 'RANKED_POST_KEY';
  private readonly MAIN_CACHE_KEY = 'MAIN_POST_KEY';
  private mainRequestCount = 0;
  private rankCRequestount = 0;

  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: PostRepository,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {
    this.setCachedMainPost();
    this.setCachedRankedPost();
  }

  getPostById(postid: PostId): PostItem {
    const category = postid.split('_')[0] as NavName;
    return mockData[category].find(
      (postItem) => postItem.postId === postid,
    ) as PostItem;
  }

  getChannelPost(): PostItem[] {
    const result: PostItem[] = [];

    for (let day = 0; day < 3; day += 1) {
      const idx = (new Date().getDay() + day) % 8;
      const category = this.domain[idx];
      result.push(...mockData[category].slice(0, 4));
    }

    return result;
  }

  /**
   * @description
   * 메인허브글도 1분마다 랜덤으로 추출하여 캐시 설정
   */
  @Cron(CronExpression.EVERY_MINUTE)
  async setCachedMainPost() {
    try {
      const mainPosts = this.extracRandomPost(6);
      await this.cacheManager.set(this.MAIN_CACHE_KEY, mainPosts, {
        ttl: 10800,
      });
    } catch (error) {
      console.error(error);
    }
  }

  async getMainPost() {
    const result = await this.cacheManager.get<PostItem[]>(this.MAIN_CACHE_KEY);
    if (result !== undefined) {
      console.log(`메인 허브 글 캐시 데이터 반환${this.mainRequestCount % 20}`);
      return result;
    }

    const mainPosts = this.extracRandomPost(6);
    await this.cacheManager.set(this.MAIN_CACHE_KEY, mainPosts, {});

    return new Promise((res) => {
      setTimeout(() => {
        res(mainPosts);
      }, 100);
    });
  }

  /**
   * @description
   * 인기허브글은 1분마다 랜덤으로 추출하여 캐시 설정
   */
  // @Cron(CronExpression.EVERY_30_MINUTES)
  @Cron(CronExpression.EVERY_MINUTE)
  async setCachedRankedPost() {
    try {
      const date = parsingDate();
      const rankedPosts = this.extracRandomPost();
      this.cacheManager.set<RankedPost>(
        this.RANKED_CACHE_KEY,
        {
          updatedMillSec: new Date().getTime(),
          date,
          rankedPosts,
        },
        { ttl: 10800 },
      );
    } catch (e) {
      console.error(e);
    }
  }

  async getRankedPost(): Promise<RankedPost> {
    const result = await this.cacheManager.get<RankedPost>(
      this.RANKED_CACHE_KEY,
    );
    if (result !== undefined) {
      console.log(
        `인기 허브 글 캐시 데이터 반환${++this.rankCRequestount % 20}`,
      );
      return result;
    }

    const date = parsingDate();
    const rankedPosts = this.extracRandomPost();
    this.cacheManager.set<RankedPost>(
      this.RANKED_CACHE_KEY,
      {
        updatedMillSec: new Date().getTime(),
        date,
        rankedPosts,
      },
      { ttl: 10800 },
    );

    return new Promise((res) => {
      setTimeout(() => {
        res({
          updatedMillSec: new Date().getTime(),
          date,
          rankedPosts,
        });
      }, 100);
    });
  }

  extracRandomPost(length = 9): PostItem[] {
    const randomPosts: PostItem[] = [];
    this.domain.forEach((item) => {
      const random = Math.floor(Math.random() * 72);
      const postId: PostId = `${item}_${random}`;
      randomPosts.push(this.getPostById(postId));
    });
    randomPosts.push(this.getPostById('culture_42'));

    return randomPosts.slice(0, length);
  }

  getSearchResult(keyword: string): PostItem[] {
    const results: PostItem[] = [];

    Object.keys(mockData).forEach((hubName: string) => {
      mockData[hubName as NavName].map((post) => {
        if (post.title.indexOf(keyword) === 0) {
          results.push(post);
        }
      });
    });
    return results;
  }

  async getReadPost(): Promise<PostItem[]> {
    const readPosts = await this.postRepository.find();
    return readPosts.map((post): PostItem => {
      const [category, idx] = post.postid.split('_');
      return mockData[category as NavName][idx];
    });
  }

  async setReadPost(postid: PostId): Promise<PostEntity[]> {
    this.delteReadPost(postid);

    const readPosts = await this.postRepository.find();
    if (readPosts.length >= 30) {
      await this.postRepository.delete(readPosts[0].id);
    }

    const newReadPost = this.postRepository.create({ postid });
    await this.postRepository.save(newReadPost);

    return [...readPosts, newReadPost];
  }

  async delteReadPost(postid: PostId) {
    await this.postRepository
      .createQueryBuilder()
      .delete()
      .from(PostEntity)
      .where('postid = :postid', { postid })
      .execute();
  }

  async setCacheTest() {
    const result = await this.cacheManager.set('silver', 123, { ttl: 12 });
    return result;
  }
}
