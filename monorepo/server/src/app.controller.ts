import {
  Controller,
  Get,
  Request,
  Param,
  Header,
  ServiceUnavailableException,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';
import { NavName, PostItem } from 'custom-type';
import { getRandomLess50 } from './utils';

@Controller('/')
export class AppController {
  constructor(private appService: AppService) {}

  @Get('/test')
  @Header('Cache-Control', 'max-age=600')
  getTest(): string {
    console.log('들어옴');
    return '테스틉니당 다시 테스트 한다!';
  }

  @Get('/random')
  getRandomTest(): string {
    if (getRandomLess50()) {
      throw new ServiceUnavailableException('랜덤 50 이하');
    }
    return '랜덤 테스트';
  }

  @Get('/:category')
  async getDataByCategory(
    @Param('category') category: string,
  ): Promise<PostItem[]> {
    return await this.appService.getDataByCategory(category as NavName);
  }

  @Get('/')
  async getHome(@Req() request: Request): Promise<string> {
    return await this.appService.getServerSideRender(request.url);
  }
}
