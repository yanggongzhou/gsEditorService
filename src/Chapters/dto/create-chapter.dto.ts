import { IsNotEmpty, IsString } from 'class-validator';

export default class CreateChapterDto {
  @IsNotEmpty({ message: '章节名不能为空' })
  readonly chapterName: string;
  readonly chapterIntro: string;
  readonly bookId: string;
}