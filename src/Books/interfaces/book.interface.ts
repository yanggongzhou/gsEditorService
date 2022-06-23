import { Document } from 'mongoose';

export interface IBook extends Document {
  id?: string;
  bookName?: string;
}
