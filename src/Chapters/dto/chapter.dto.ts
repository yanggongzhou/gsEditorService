import { IChapter } from '@/Chapters/interfaces/chapter.interface';

export default class ChapterDto {
  constructor(object: IChapter) {
    this.chapterName = object.chapterName;
    this.chapterIntro = object.chapterIntro || '';
    this.bookId = object.bookId;
    this.id = object._id;
  }
  readonly id: string;
  readonly chapterName: string;
  readonly chapterIntro: string;
  readonly bookId: string;
}
