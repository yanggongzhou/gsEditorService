import { Document } from 'mongoose';

export interface IChapter extends Document {
  bookId: string;
  chapterName: string;
  chapterIntro?: string;
}
