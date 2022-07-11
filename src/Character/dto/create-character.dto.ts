import { EBoolean } from '@/common/interfaces/common.interface';
import { SexType } from '@/Character/interfaces/character.interface';
import { IsNotEmpty } from 'class-validator';

/**
 * 输入 传给数据库的模型
 */

export default class CreateCharacterDto {
  @IsNotEmpty({ message: 'characterName不能为空' })
  readonly characterName: string;
  readonly characterIntro: string;
  readonly bookId: string;
  readonly sex: SexType;
  readonly mainCharacter: EBoolean;
}