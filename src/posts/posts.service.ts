import { Injectable } from '@nestjs/common';
import { PostType } from './post.interface';

@Injectable()
export class PostsService {
  // Tsの型指定を使うことによって、プロジェクトの堅牢性をあげることができる
  private readonly posts: PostType[] = [];

  findAll(): PostType[] {
    return this.posts;
  }
}
