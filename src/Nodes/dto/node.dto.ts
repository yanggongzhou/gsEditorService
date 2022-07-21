import { INodeItem } from '@/Nodes/interfaces/node.interface';
import SceneDto from '@/Scenes/dto/scene.dto';

export default class NodeDto {
  constructor(obj: INodeItem) {
    this.id = obj._id;
    this.bookId = obj.bookId;
    this.chapterId = obj.chapterId;
    this.sceneNum = obj.sceneNum || '';
    this.sceneContent = obj?.sceneContent || 'new Scene';
    this.sceneList =
      obj?.sceneList.map((val) => new SceneDto(val)) || ([] as SceneDto[]);
  }
  readonly id?: string;
  readonly bookId: string;
  readonly chapterId: string;
  sceneNum?: string; // 场景编号
  sceneContent?: string; // 场景标题｜内容
  sceneList?: SceneDto[];
}
