import CreateMaterialDto from '@/Material/dto/create-material.dto';

/**
 * 输入 传给数据库的模型
 */

export default class UpdateMaterialDto extends CreateMaterialDto {
  readonly id: string;
}