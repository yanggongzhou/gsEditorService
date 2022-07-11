import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  LookTypeEnum,
  IMaterial,
  MaterialTypeEnum,
} from '@/Material/interfaces/material.interface';
import CreateMaterialDto from '@/Material/dto/create-material.dto';
import UpdateMaterialDto from '@/Material/dto/update-material.dto';

@Injectable()
export class MaterialService {
  constructor(
    @InjectModel('Material')
    private readonly materialModel: Model<IMaterial>,
  ) {}
  /**
   * 获取素材列表
   */
  async serviceMaterialList(params: {
    materialType: MaterialTypeEnum;
    lookType?: LookTypeEnum;
  }): Promise<IMaterial[]> {
    return await this.materialModel.find(params).exec();
  }
  /**
   * 创建素材
   */
  async serviceCreateMaterial(params: CreateMaterialDto) {
    const newMaterial = new this.materialModel(params);
    return await newMaterial.save();
  }
  /**
   * 删除素材
   */
  async serviceDeleteMaterial(id: string) {
    return this.materialModel.findByIdAndDelete(id);
  }
  /**
   * 编辑素材
   */
  async serviceEditMaterial(params: UpdateMaterialDto) {
    const item = await this.materialModel.findById(params.id);
    // todo - 添加装扮
    item.overwrite({ ...params });
    return await item.save();
  }
}
