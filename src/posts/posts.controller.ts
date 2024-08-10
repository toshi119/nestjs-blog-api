import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostType } from './post.interface';

@Controller('posts')
export class PostsController {
  // コンストラクターは初期化とインスタンス化を同時にやってくれるもの
  constructor(readonly postsService: PostsService) {}

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Post()
  create(@Body() post: PostType): void {
    this.postsService.create(post);
  }
}
