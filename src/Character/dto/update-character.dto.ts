import { IDressUp } from '@/Character/interfaces/character.interface';
import CreateCharacterDto from '@/Character/dto/create-character.dto';

/**
 * 输入 传给数据库的模型
 */

export default class UpdateCharacterDto extends CreateCharacterDto {
  readonly id: string;
  readonly dressUp: IDressUp;
}