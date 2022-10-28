import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PostId } from 'custom-type';

@Entity()
export class CommentEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  postid: PostId;

  @Column()
  author: string;

  @Column()
  description: string;

  @Column()
  date: string;

  @Column()
  like: number;

  @Column()
  hate: number;
}
