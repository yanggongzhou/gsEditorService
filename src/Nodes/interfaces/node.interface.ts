import { Document } from 'mongoose';
import { ISceneItem } from '@/Scenes/interfaces/scene.interface';
import SceneDto from '@/Scenes/dto/scene.dto';

export interface INodeItem extends Document {
  id?: string;
  bookId: string;
  chapterId: string;
  sceneContent: string; // 场景标题｜内容
  sceneNum?: string; // 场景编号
  sceneList?: SceneDto[];
}
