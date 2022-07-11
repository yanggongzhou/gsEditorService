import { Document } from 'mongoose';

/**
 * 定义 mongoose Model 模型 character.service.ts
 */
export interface IMaterial extends Document {
  materialName: string;
  materialType: string;
  materialUrl: string;
}