import { ICharacter } from '@/Character/interfaces/character.interface';

export default class CharacterDto {
  constructor(object: ICharacter) {
    this.characterName = object.characterName;
    this.characterIntro = object.characterIntro || '';
    this.bookId = object.bookId || '';
    this.id = object._id;
  }
  readonly id: string;
  readonly characterName: string;
  readonly characterIntro: string;
  readonly bookId: string;
}
