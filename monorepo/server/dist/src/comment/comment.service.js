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
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const comment_repository_1 = require("./comment.repository");
const comment_entity_1 = require("./comment.entity");
const utils_1 = require("../utils");
let CommentService = class CommentService {
    constructor(commentRepository, cacheManager) {
        this.commentRepository = commentRepository;
        this.cacheManager = cacheManager;
    }
    async getPostCommentById(postid) {
        if ((0, utils_1.getRandomLess50)()) {
            throw new common_1.ServiceUnavailableException('댓글 가져오기 실패 랜덤 50');
        }
        const commentList = await this.commentRepository.find({
            where: { postid },
        });
        return commentList;
    }
    async createCommentByPostId(commentItem) {
        const { author, description, postId } = commentItem;
        const newComment = this.commentRepository.create({
            author,
            description,
            postid: postId,
            like: 0,
            hate: 0,
            date: (0, utils_1.parsingDate)(),
        });
        await this.commentRepository.save(newComment);
        return newComment;
    }
    async deleteComment(postid, id) {
        console.log(postid, id);
        const result = await this.commentRepository
            .createQueryBuilder()
            .delete()
            .from(comment_entity_1.CommentEntity)
            .where('id = :id and postid = :postid', {
            id,
            postid,
        })
            .execute();
        if (result.affected === 0) {
            throw new common_1.NotFoundException('삭제할 댓글이 없습니다.');
        }
        return result;
    }
    async getMockData() {
        const data = {
            author: 'author',
            description: 'description',
            like: 0,
            hate: 0,
            date: (0, utils_1.parsingDate)(),
        };
        try {
            await this.cacheManager.set('life_0', [data, data, data]);
        }
        catch (e) {
            throw new common_1.InternalServerErrorException('댓글을 생성하지 못함');
        }
        return await this.cacheManager.get('life_0');
    }
};
CommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comment_entity_1.CommentEntity)),
    __param(1, (0, common_1.Inject)(common_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [comment_repository_1.CommentRepository, Object])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map