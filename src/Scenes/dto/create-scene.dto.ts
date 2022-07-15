import { IsNotEmpty } from 'class-validator';
import {
  EmotionEnum,
  PositionEnum,
  TemplateTypeEnum,
} from '@/Scenes/interfaces/scene.interface';

export default class CreateSceneDto {
  readonly bookId: string;
  readonly chapterId: string;
  @IsNotEmpty({ message: '节点Id不能为空' })
  readonly nodeId: string;
  readonly roleId?: string; // 角色Id role_id
  roleName?: string; // 角色名称
  sceneNum?: string; // 场景编号
  look?: string; // 装扮类型
  emotion?: EmotionEnum; // 表情
  content?: string; // 内容
  type: TemplateTypeEnum; // 节点类型
  // end: false, // 是否本章重点
  nextId: string; // 下个节点 next_id
  cameraPos: PositionEnum; // 镜头 camera_pos
  posId: PositionEnum; // 位置 pos_id
  bgmId?: string; // 背景音乐 bgm_id
  sceneBg?: string; // 场景背景名称 scene_bg
  sceneAround: boolean; // 场景环视，是一个特效 scene_around
  sceneContent?: string; // 场景标题｜内容
  options?: string[]; // 对话选项
  selections?: string[]; // 服饰选项
}