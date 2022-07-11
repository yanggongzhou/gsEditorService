import { IsNotEmpty } from 'class-validator';
import {
  LookTypeEnum,
  MaterialTypeEnum,
} from '@/Material/interfaces/material.interface';

/**
 * 输入 传给数据库的模型
 */

export default class CreateMaterialDto {
  readonly materialName: string;
  @IsNotEmpty({ message: '请选择素材类型' })
  readonly materialType: MaterialTypeEnum;
  readonly lookType: LookTypeEnum;
  @IsNotEmpty({ message: '素材链接不能为空' })
  readonly materialUrl: string;
}
