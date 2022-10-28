import { Module, CacheModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentEntity } from './comment.entity';
import { CommentRepository } from './comment.repository';
import { CommentService } from './comment.service';
import { CommentController } from './commet.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity]), CacheModule.register()],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
