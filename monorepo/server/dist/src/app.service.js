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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const index_1 = require("./assets/hubmock/index");
const path_1 = require("path");
const server_renderer_1 = require("vue/server-renderer");
const fs_1 = require("fs");
let AppService = class AppService {
    constructor() { }
    async getServerSideRender(url) {
        const manifest = require('../ssr/server/ssr-manifest.json');
        const appPath = (0, path_1.join)(__dirname, '../ssr', 'server', manifest['app.js']);
        const createApp = require(appPath).default;
        const { app, router } = await createApp();
        router.push(url);
        await router.isReady();
        let appContent = await (0, server_renderer_1.renderToString)(app);
        return new Promise((res) => {
            (0, fs_1.readFile)((0, path_1.join)(__dirname, '../ssr/client/index.html'), 'utf8', (err, html) => {
                if (err) {
                    throw err;
                }
                appContent = `<div id="app">${appContent}</div>`;
                html = html
                    .toString()
                    .replace('<div id="app"></div>', `${appContent}`);
                res(html);
            });
        });
    }
    getDataByCategory(category) {
        return new Promise((res) => {
            setTimeout(() => {
                res(index_1.mockData[category]);
            }, 200);
        });
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map