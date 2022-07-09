import { Document } from 'mongoose';

export interface ICharacter extends Document {
  characterName: string;
  characterIntro?: string;
  bookId: string;
}
