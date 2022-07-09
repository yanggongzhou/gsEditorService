import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ChapterService } from './chapter.service';
import CreateChapterDto from '@/Chapters/dto/create-chapter.dto';
import ChapterDto from '@/Chapters/dto/chapter.dto';
import UpdateChapterDto from '@/Chapters/dto/update-chapter.dto';

@Controller('/api/chapter')
export class ChapterController {
  constructor(private readonly chapterService: ChapterService) {}

  /**
   * 获取章节列表
   */
  @Get('/list')
  async getChapterList(@Query() params: { bookId: string }) {
    const data = await this.chapterService.serviceChapterList({ ...params });
    return data.map((val) => new ChapterDto(val));
  }

  /**
   * 创建章节
   * @param params CreateChapterDto
   */
  @Post('/save')
  async CreateChapter(@Body() params: CreateChapterDto) {
    const item = await this.chapterService.serviceCreateChapter(params);
    return new ChapterDto(item);
  }

  /**
   * 删除章节
   */
  @Delete('/delete')
  async DeleteChapter(@Query() query: { id: string }) {
    const item = await this.chapterService.serviceDeleteChapter(query.id);
    return new ChapterDto(item);
  }
  /**
   * 编辑章节
   */
  @Post('/edit')
  async EditChapter(@Body() params: UpdateChapterDto) {
    return await this.chapterService.serviceEditChapter(params);
  }
  /**
   * 获取章节列表
   * @param query
   */
  @Get('/detail')
  async DetailChapter(@Query() query: { id: string }) {
    const item = await this.chapterService.serviceDetailChapter(query.id);
    return new ChapterDto(item);
  }
}
