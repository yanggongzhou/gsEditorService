import { IMaterial } from '@/Material/interfaces/material.interface';

/**
 * 输出 传给客户端的模型
 */

export default class MaterialDto {
  constructor(object: IMaterial) {
    this.materialName = object.materialName;
    this.materialType = object.materialType || '';
    this.materialUrl = object.materialUrl || '';
    this.id = object._id;
  }
  readonly id: string;
  readonly materialName: string;
  readonly materialType: string;
  readonly materialUrl: string;
}
