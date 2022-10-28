"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const index_1 = require("../assets/hubmock/index");
const schedule_1 = require("@nestjs/schedule");
const utils_1 = require("../utils");
const post_entity_1 = require("./post.entity");
const typeorm_1 = require("@nestjs/typeorm");
const post_repository_1 = require("./post.repository");
let PostService = class PostService {
    constructor(postRepository, cacheManager) {
        this.postRepository = postRepository;
        this.cacheManager = cacheManager;
        this.domain = [
            'life',
            'food',
            'trip',
            'culture',
            'tech',
            'biz',
            'issue',
            'entertainment',
        ];
        this.RANKED_CACHE_KEY = 'RANKED_POST_KEY';
        this.MAIN_CACHE_KEY = 'MAIN_POST_KEY';
        this.mainRequestCount = 0;
        this.rankCRequestount = 0;
        this.setCachedMainPost();
        this.setCachedRankedPost();
    }
    getPostById(postid) {
        const category = postid.split('_')[0];
        return index_1.mockData[category].find((postItem) => postItem.postId === postid);
    }
    getChannelPost() {
        const result = [];
        for (let day = 0; day < 3; day += 1) {
            const idx = (new Date().getDay() + day) % 8;
            const category = this.domain[idx];
            result.push(...index_1.mockData[category].slice(0, 4));
        }
        return result;
    }
    async setCachedMainPost() {
        try {
            const mainPosts = this.extracRandomPost(6);
            await this.cacheManager.set(this.MAIN_CACHE_KEY, mainPosts, {
                ttl: 10800,
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    async getMainPost() {
        const result = await this.cacheManager.get(this.MAIN_CACHE_KEY);
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
    async setCachedRankedPost() {
        try {
            const date = (0, utils_1.parsingDate)();
            const rankedPosts = this.extracRandomPost();
            this.cacheManager.set(this.RANKED_CACHE_KEY, {
                updatedMillSec: new Date().getTime(),
                date,
                rankedPosts,
            }, { ttl: 10800 });
        }
        catch (e) {
            console.error(e);
        }
    }
    async getRankedPost() {
        const result = await this.cacheManager.get(this.RANKED_CACHE_KEY);
        if (result !== undefined) {
            console.log(`인기 허브 글 캐시 데이터 반환${++this.rankCRequestount % 20}`);
            return result;
        }
        const date = (0, utils_1.parsingDate)();
        const rankedPosts = this.extracRandomPost();
        this.cacheManager.set(this.RANKED_CACHE_KEY, {
            updatedMillSec: new Date().getTime(),
            date,
            rankedPosts,
        }, { ttl: 10800 });
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
    extracRandomPost(length = 9) {
        const randomPosts = [];
        this.domain.forEach((item) => {
            const random = Math.floor(Math.random() * 72);
            const postId = `${item}_${random}`;
            randomPosts.push(this.getPostById(postId));
        });
        randomPosts.push(this.getPostById('culture_42'));
        return randomPosts.slice(0, length);
    }
    getSearchResult(keyword) {
        const results = [];
        Object.keys(index_1.mockData).forEach((hubName) => {
            index_1.mockData[hubName].map((post) => {
                if (post.title.indexOf(keyword) === 0) {
                    results.push(post);
                }
            });
        });
        return results;
    }
    async getReadPost() {
        const readPosts = await this.postRepository.find();
        return readPosts.map((post) => {
            const [category, idx] = post.postid.split('_');
            return index_1.mockData[category][idx];
        });
    }
    async setReadPost(postid) {
        this.delteReadPost(postid);
        const readPosts = await this.postRepository.find();
        if (readPosts.length >= 30) {
            await this.postRepository.delete(readPosts[0].id);
        }
        const newReadPost = this.postRepository.create({ postid });
        await this.postRepository.save(newReadPost);
        return [...readPosts, newReadPost];
    }
    async delteReadPost(postid) {
        await this.postRepository
            .createQueryBuilder()
            .delete()
            .from(post_entity_1.PostEntity)
            .where('postid = :postid', { postid })
            .execute();
    }
    async setCacheTest() {
        const result = await this.cacheManager.set('silver', 123, { ttl: 12 });
        return result;
    }
};
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_MINUTE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostService.prototype, "setCachedMainPost", null);
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_MINUTE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostService.prototype, "setCachedRankedPost", null);
PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.PostEntity)),
    __param(1, (0, common_1.Inject)(common_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [post_repository_1.PostRepository, Object])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map