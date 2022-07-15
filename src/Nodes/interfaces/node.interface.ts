import { Document } from 'mongoose';

export interface INodeItem extends Document {
  id?: string;
  bookId: string;
  chapterId: string;
  sceneContent: string; // 场景标题｜内容
  sceneNum?: string; // 场景编号
}
