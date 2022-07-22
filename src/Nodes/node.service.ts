import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { INodeItem } from '@/Nodes/interfaces/node.interface';
import CreateNodeDto from '@/Nodes/dto/create-node.dto';
import UpdateNodeDto from '@/Nodes/dto/update-node.dto';
import { TemplateTypeEnum } from '@/Scenes/interfaces/scene.interface';
import { getGuid } from '@/utils/guid';
import SceneDto from '@/Scenes/dto/scene.dto';
import CreateSceneDto from '@/Scenes/dto/create-scene.dto';
import UpdateSceneDto from '@/Scenes/dto/update-scene.dto';

@Injectable()
export class NodeService {
  constructor(
    @InjectModel('Node') private readonly nodeModel: Model<INodeItem>,
  ) {}
  /**
   * 获取节点列表
   */
  async serviceNodeList(
    bookId: string,
    chapterId: string,
  ): Promise<INodeItem[]> {
    return await this.nodeModel.find({ bookId, chapterId }).exec();
  }
  /**
   * 创建节点
   */
  async serviceCreateNode(params: CreateNodeDto) {
    const newNode = new this.nodeModel(params);
    return await newNode.save();
  }
  /**
   * 删除节点
   */
  async serviceDeleteNode(id: string) {
    return this.nodeModel.findByIdAndDelete(id);
  }
  /**
   * 编辑节点
   */
  async serviceEditNode(params: UpdateNodeDto) {
    return this.nodeModel.findByIdAndUpdate(params.id, { ...params });
  }

  /**
   * 创建节点子项
   */
  async serviceCreateScene(params: SceneDto) {
    const newSceneItem = {
      ...params,
      id: getGuid(),
    };
    return this.nodeModel.findByIdAndUpdate(params.nodeId, {
      $push: { sceneList: newSceneItem },
    });
  }
  /**
   * 删除节点子项
   */
  async serviceDeleteScene(params: { id: string; nodeId: string }) {
    const item = await this.nodeModel.findById(params.nodeId);
    const index = item.sceneList.findIndex((val) => val.id === params.id);
    if (index !== -1) {
      item.sceneList.splice(index, 1);
    }
    return item.save();
  }
  /**
   * 编辑节点子项
   */
  async serviceEditScene(params: UpdateSceneDto) {
    const nodeDb = await this.nodeModel.findById(params.nodeId);
    nodeDb.sceneList = nodeDb.sceneList.map((scene) => {
      if (scene.id === params.id) {
        return params;
      }
      return scene;
    });
    return nodeDb.save();
  }

  /**
   * 删除节点子项Branch
   */
  async serviceDeleteBranch(params: { id: string; nodeId: string }) {
    const item = await this.nodeModel.findById(params.nodeId);
    const branchItem = item.sceneList.find((val) => val.id === params.id);
    if (branchItem.type === TemplateTypeEnum.对话分支) {
      item.sceneList = item.sceneList.filter(
        (val) => branchItem.options.indexOf(val.id) === -1,
      );
    }
    const index = item.sceneList.findIndex((val) => val.id === params.id);
    if (index !== -1) {
      item.sceneList.splice(index, 1);
    }
    return item.save();
  }

  /**
   * 创建节点子项Branch
   */
  async serviceCreateBranch(params: CreateSceneDto) {
    const item = await this.nodeModel.findById(params.nodeId);
    const newSceneItem = (type: TemplateTypeEnum) => ({
      ...params,
      id: getGuid(),
      type,
    });
    const branchData = newSceneItem(params.type);
    if (params.type === TemplateTypeEnum.对话分支) {
      const optionItem1 = newSceneItem(TemplateTypeEnum.选项);
      const optionItem2 = newSceneItem(TemplateTypeEnum.选项);
      item.sceneList = item.sceneList.concat([optionItem1, optionItem2]);
      branchData.options = [optionItem1.id, optionItem2.id];
    }
    item.sceneList.push(branchData);
    return item.save();
  }
}
