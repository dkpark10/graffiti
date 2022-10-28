import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { PostId } from 'custom-type';

@Entity()
export class PostEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  postid: PostId;
}
