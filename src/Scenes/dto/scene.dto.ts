import {
  ISceneItem,
  EmotionEnum,
  PositionEnum,
  TemplateTypeEnum,
} from '@/Scenes/interfaces/scene.interface';

export default class SceneDto {
  constructor(obj: ISceneItem) {
    this.id = obj.id || '';
    this.bookId = obj.bookId;
    this.chapterId = obj.chapterId;
    this.nodeId = obj.nodeId;
    this.sceneNum = obj.sceneNum || '';
    this.roleId = obj.roleId;
    this.roleName = obj.roleName;
    this.look = obj.look;
    this.bgmId = obj.bgmId;
    this.sceneBg = obj.sceneBg;
    this.options = obj.options;
    this.selections = obj.selections;
    this.sceneAround = obj?.sceneAround || false;
    this.sceneContent = obj?.sceneContent || '';
    this.emotion = obj.emotion || EmotionEnum.无表情;
    this.content = obj.content || '';
    this.type = obj.type || TemplateTypeEnum.旁白;
    this.nextId = obj.nextId || '';
    this.cameraPos = obj.cameraPos || PositionEnum.中间;
    this.posId = obj.posId || PositionEnum.中间;
  }
  readonly id: string;
  readonly bookId: string;
  readonly chapterId: string;
  readonly nodeId: string;
  sceneNum?: string; // 场景编号
  roleId?: string; // 角色Id role_id
  roleName?: string; // 角色名称
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
