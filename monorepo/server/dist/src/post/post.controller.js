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
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const post_service_1 = require("./post.service");
let PostController = class PostController {
    constructor(postService) {
        this.postService = postService;
    }
    async getMainPost() {
        return await this.postService.getMainPost();
    }
    getChannelPost() {
        return this.postService.getChannelPost();
    }
    async getRankedPost() {
        return await this.postService.getRankedPost();
    }
    getSearchResult(keyword) {
        return this.postService.getSearchResult(keyword);
    }
    getReadPost() {
        return this.postService.getReadPost();
    }
    setCacheTest() {
        return this.postService.setCacheTest();
    }
    getPostById(postid) {
        return this.postService.getPostById(postid);
    }
    setReadPost(postid) {
        return this.postService.setReadPost(postid);
    }
};
__decorate([
    (0, common_1.Get)('/main'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getMainPost", null);
__decorate([
    (0, common_1.Get)('/channel'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostController.prototype, "getChannelPost", null);
__decorate([
    (0, common_1.Get)('/ranking'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getRankedPost", null);
__decorate([
    (0, common_1.Get)('/search/:keyword'),
    __param(0, (0, common_1.Param)('keyword')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], PostController.prototype, "getSearchResult", null);
__decorate([
    (0, common_1.Get)('/read'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getReadPost", null);
__decorate([
    (0, common_1.Get)('/test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostController.prototype, "setCacheTest", null);
__decorate([
    (0, common_1.Get)('/:postid'),
    __param(0, (0, common_1.Param)('postid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], PostController.prototype, "getPostById", null);
__decorate([
    (0, common_1.Post)('/read/:postid'),
    __param(0, (0, common_1.Param)('postid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "setReadPost", null);
PostController = __decorate([
    (0, common_1.Controller)('post'),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map