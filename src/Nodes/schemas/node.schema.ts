import * as mongoose from 'mongoose';
/**
 * 仅用来渲染块，并包裹多个子节点
 */
export const NodeSchema = new mongoose.Schema({
  id: String,
  bookId: String,
  chapterId: String,
  sceneContent: String, // 场景标题｜内容
  sceneNum: String, // 场景编号
  sceneList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SceneSchema' }],
});
