import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  // コンストラクターは初期化とインスタンス化を同時にやってくれるもの
  constructor(readonly postsService: PostsService) {}

  @Get()
  findAll() {
    return this.postsService.findAll();
  }
}
