import { Document } from 'mongoose';

/**
 * 定义 mongoose Model 模型 character.service.ts
 */
export interface IMaterial extends Document {
  materialName: string;
  materialType: MaterialTypeEnum;
  lookType: LookTypeEnum;
  materialUrl: string;
}

export enum MaterialTypeEnum {
  look = 'LOOK',
  background = 'BG',
  bgm = 'BGM',
}

// characterCenter
export enum LookTypeEnum {
  skin = 'SKIN',
  emotion = 'EMOTION',
  hair = 'HAIR',
  cloth = 'CLOTH',
  backext = 'BACKEXT',
}
