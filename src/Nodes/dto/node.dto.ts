import { INodeItem } from '@/Nodes/interfaces/node.interface';

export default class NodeDto {
  constructor(obj: INodeItem) {
    this.id = obj.id || '';
    this.bookId = obj.bookId;
    this.chapterId = obj.chapterId;
    this.sceneNum = obj.sceneNum || '';
    this.sceneContent = obj?.sceneContent || '';
  }
  readonly id: string;
  readonly bookId: string;
  readonly chapterId: string;
  sceneNum?: string; // 场景编号
  sceneContent?: string; // 场景标题｜内容
}
