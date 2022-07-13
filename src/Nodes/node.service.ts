import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { INodeItem } from '@/Nodes/interfaces/node.interface';
import CreateNodeDto from '@/Nodes/dto/create-node.dto';
import UpdateNodeDto from '@/Nodes/dto/update-node.dto';

@Injectable()
export class NodeService {
  constructor(
    @InjectModel('Node') private readonly nodeModel: Model<INodeItem>,
  ) {}
  /**
   * 获取节点列表
   */
  async serviceNodeList(bookId: string, chapterId: string): Promise<INodeItem[]> {
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
}
