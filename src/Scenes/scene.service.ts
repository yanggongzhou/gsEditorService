import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import CreateSceneDto from '@/Scenes/dto/create-scene.dto';
import UpdateSceneDto from '@/Scenes/dto/update-scene.dto';
import { ISceneItem } from '@/Scenes/interfaces/scene.interface';

@Injectable()
export class SceneService {
  constructor(
    @InjectModel('Scene') private readonly sceneModel: Model<ISceneItem>,
  ) {}
  /**
   * 获取节点子项列表
   */
  async serviceSceneList(
    bookId: string,
    chapterId: string,
  ): Promise<ISceneItem[]> {
    return await this.sceneModel.find({ bookId, chapterId }).exec();
  }
  /**
   * 创建节点子项
   */
  async serviceCreateScene(params: CreateSceneDto) {
    const newScene = new this.sceneModel(params);
    return await newScene.save();
  }
  /**
   * 删除节点子项
   */
  async serviceDeleteScene(id: string) {
    return this.sceneModel.findByIdAndDelete(id);
  }
  /**
   * 编辑节点子项
   */
  async serviceEditScene(params: UpdateSceneDto) {
    return this.sceneModel.findByIdAndUpdate(params.id, { ...params });
  }
}
