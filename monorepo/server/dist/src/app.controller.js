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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const utils_1 = require("./utils");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getTest() {
        console.log('들어옴');
        return '테스틉니당 다시 테스트 한다!';
    }
    getRandomTest() {
        if ((0, utils_1.getRandomLess50)()) {
            throw new common_1.ServiceUnavailableException('랜덤 50 이하');
        }
        return '랜덤 테스트';
    }
    async getDataByCategory(category) {
        return await this.appService.getDataByCategory(category);
    }
    async getHome(request) {
        return await this.appService.getServerSideRender(request.url);
    }
};
__decorate([
    (0, common_1.Get)('/test'),
    (0, common_1.Header)('Cache-Control', 'max-age=600'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getTest", null);
__decorate([
    (0, common_1.Get)('/random'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getRandomTest", null);
__decorate([
    (0, common_1.Get)('/:category'),
    __param(0, (0, common_1.Param)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getDataByCategory", null);
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getHome", null);
AppController = __decorate([
    (0, common_1.Controller)('/'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map