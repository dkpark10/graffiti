import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

(async function () {
  const app = await NestFactory.create(AppModule);
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
