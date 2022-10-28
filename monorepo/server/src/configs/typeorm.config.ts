import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DB_PASSWORD, DB_NAME } from 'private/config';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
