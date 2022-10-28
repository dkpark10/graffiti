import { IsString, MaxLength, MinLength } from 'class-validator';
import { PostId } from 'custom-type';

export class CommentCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  author: string;

  @IsString()
  @MinLength(1)
  @MaxLength(1000)
  description: string;

  @IsString()
  postId: PostId;
}
