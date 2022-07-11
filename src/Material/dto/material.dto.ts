import {
  LookTypeEnum,
  IMaterial,
  MaterialTypeEnum,
} from '@/Material/interfaces/material.interface';

/**
 * 输出 传给客户端的模型
 */

export default class MaterialDto {
  constructor(object: IMaterial) {
    this.materialName = object.materialName;
    this.materialType = object.materialType || MaterialTypeEnum.look;
    this.materialUrl = object.materialUrl || '';
    this.lookType = object.lookType;
    this.id = object._id;
  }
  readonly id: string;
  readonly materialName: string;
  readonly materialType: MaterialTypeEnum;
  readonly lookType: LookTypeEnum;
  readonly materialUrl: string;
}
