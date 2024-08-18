import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './create-article.dto';

@Controller('/articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('/test')
  test() {
    return this.articleService.test();
  }

  // Get all articles
  @Get('/')
  async findAll() {
    try {
      return this.articleService.findAll();
    } catch {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'No Articles found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  // Create/add an article
  @Post('/new')
  async addArticle(@Body() createArticleDto: CreateArticleDto) {
    try {
      await this.articleService.create(createArticleDto);
      return { message: 'Article added successfully' };
    } catch {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Unable to add this article',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
