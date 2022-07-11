import { Document } from 'mongoose';
import { EBoolean } from '@/common/interfaces/common.interface';

/**
 * 定义 mongoose Model 模型 character.service.ts
 */
export interface ICharacter extends Document {
  characterName: string;
  characterIntro?: string;
  bookId: string;
  sex: SexType;
  mainCharacter: EBoolean;
  dressUp?: IDressUpItem[];
}

interface ISkin {
  id: string;
  url: string;
}

export interface IDressUpItem {
  id: string;
  name: string;
  isDefault: EBoolean;
  skin?: ISkin;
  cloth?: ISkin;
  emotion?: ISkin;
  hair?: ISkin;
  backext?: ISkin;
}

export enum SexType {
  boy = 1,
  girl = 2,
}