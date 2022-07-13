import * as mongoose from 'mongoose';

export const NodeSchema = new mongoose.Schema({
  id: String,
  bookId: String,
  chapterId: String,
  sceneContent: String, // 场景标题｜内容
  roleId: String, // 角色Id role_id
  roleName: String, // 角色名称
  look: String, // 装扮类型
  emotion: String, // 表情
  content: String, // 内容
  type: String, // 节点类型
  nextId: String, // 下个节点 next_id
  cameraPos: String, // 镜头 camera_pos
  posId: String, // 位置 pos_id
  bgm: String, // 背景音乐 bgm_id
  scene: String, // 场景背景名称 scene_bg
  sceneAround: String, // 场景环视，是一个特效 scene_around
  options: [String], // 对话选项
  selections: [String], // 服饰选项
  sceneNum: String, // 场景编号
});
