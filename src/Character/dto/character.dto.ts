import { ICharacter, IDressUpItem, SexType } from '@/Character/interfaces/character.interface';
import { EBoolean } from '@/common/interfaces/common.interface';

/**
 * 输出 传给客户端的模型
 */

export default class CharacterDto {
  constructor(object: ICharacter) {
    this.characterName = object.characterName;
    this.characterIntro = object.characterIntro || '';
    this.bookId = object.bookId || '';
    this.id = object._id;
    this.sex = object.sex || SexType.boy;
    this.mainCharacter = object.mainCharacter || EBoolean.no;
    this.dressUp = object.dressUp;
  }
  readonly id: string;
  readonly characterName: string;
  readonly characterIntro: string;
  readonly bookId: string;
  readonly sex: SexType;
  readonly mainCharacter: EBoolean;
  readonly dressUp: IDressUpItem[];
}
