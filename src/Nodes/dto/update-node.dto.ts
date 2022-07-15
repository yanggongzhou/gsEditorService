import { IsNotEmpty } from 'class-validator';

export default class UpdateNodeDto {
  @IsNotEmpty({ message: '节点Id不能为空' })
  readonly id: string;
  @IsNotEmpty({ message: '书籍Id不能为空' })
  readonly bookId: string;
  @IsNotEmpty({ message: '章节Id不能为空' })
  readonly chapterId: string;
  sceneNum?: string; // 场景编号
  sceneContent?: string; // 场景标题｜内容
}
