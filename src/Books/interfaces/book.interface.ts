import { Document } from 'mongoose';

export interface IBook extends Document {
  bookName: string;
  bookIntro?: string;
  bookCover?: string;
}
