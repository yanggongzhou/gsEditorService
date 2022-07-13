import { Model } from 'mongoose';
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IChapter } from '@/Chapters/interfaces/chapter.interface';
import CreateChapterDto from '@/Chapters/dto/create-chapter.dto';
import UpdateChapterDto from '@/Chapters/dto/update-chapter.dto';

@Injectable()
export class ChapterService {
  constructor(
    @InjectModel('Chapter') private readonly chapterModel: Model<IChapter>,
  ) {}
  /**
   * 获取章节列表
   */
  async serviceChapterList(params: { bookId: string }): Promise<IChapter[]> {
    return await this.chapterModel.find(params).exec();
  }
  /**
   * 创建章节
   */
  async serviceCreateChapter(params: CreateChapterDto) {
    if (params.chapterName) {
      const newChapter = new this.chapterModel(params);
      return await newChapter.save();
    } else {
      throw new HttpException('章节名称不合规', HttpStatus.FORBIDDEN);
    }
  }
  /**
   * 删除章节
   */
  async serviceDeleteChapter(id: string) {
    if (id) {
      return this.chapterModel.findByIdAndDelete(id);
    } else {
      throw new HttpException('ssss', HttpStatus.FORBIDDEN);
    }
  }
  /**
   * 编辑章节
   */
  async serviceEditChapter(params: UpdateChapterDto) {
    return this.chapterModel.findByIdAndUpdate(params.id, { ...params });
  }
  /**
   * 章节详情
   */
  async serviceDetailChapter(id: string) {
    return this.chapterModel.findById(id);
  }
}
