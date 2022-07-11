import { IsNotEmpty } from 'class-validator';

/**
 * 输入 传给数据库的模型
 */

export default class CreateMaterialDto {
  @IsNotEmpty({ message: '素材名不能为空' })
  readonly materialName: string;
  @IsNotEmpty({ message: '请选择素材类型' })
  readonly materialType: string;
  @IsNotEmpty({ message: '素材链接不能为空' })
  readonly materialUrl: string;
}