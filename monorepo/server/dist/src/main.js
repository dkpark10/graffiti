"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
(async function () {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: [
            'http://localhost:8080',
            'http://localhost:4001',
            'http://localhost:4002',
            'http://localhost:8082',
        ],
    });
    const PORT = 3000;
    console.log(`서버실행 ${PORT}`);
    await app.listen(PORT);
})();
//# sourceMappingURL=main.js.map