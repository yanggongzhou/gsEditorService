import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ICharacter } from '@/Character/interfaces/character.interface';
import CreateCharacterDto from '@/Character/dto/create-character.dto';
import UpdateCharacterDto, { UpdateCharacterLookDto } from '@/Character/dto/update-character.dto';

@Injectable()
export class CharacterService {
  constructor(
    @InjectModel('Character')
    private readonly characterModel: Model<ICharacter>,
  ) {}
  /**
   * 获取角色列表
   */
  async serviceCharacterList(bookId: string): Promise<ICharacter[]> {
    return await this.characterModel.find({ bookId }).exec();
  }
  /**
   * 创建角色
   */
  async serviceCreateCharacter(params: CreateCharacterDto) {
    const newCharacter = new this.characterModel(params);
    return await newCharacter.save();
  }
  /**
   * 删除角色
   */
  async serviceDeleteCharacter(id: string) {
    return this.characterModel.findByIdAndDelete(id);
  }
  /**
   * 编辑角色
   */
  async serviceEditCharacter(params: UpdateCharacterDto) {
    const item = await this.characterModel.findById(params.id);
    item.overwrite({ ...params });
    return await item.save();
  }
  /**
   * 角色详情
   */
  async serviceDetailCharacter(id: string) {
    return this.characterModel.findById(id);
  }

  /**
   * 新增形象
   */
  async serviceAddCharacterLook(params: UpdateCharacterLookDto) {
    const item = await this.characterModel.findById(params.id);
    // @ts-ignore
    const dressUpArr = item.dressUp && JSON.parse(item.dressUp).length > 0
      ? item.dressUp.push(params.dressUpItem) : [params.dressUpItem]
    item.overwrite({ dressUp: JSON.stringify(dressUpArr)});
    return await item.save();
  }

  /**
   * 修改形象
   */
  async serviceEditCharacterLook(params: UpdateCharacterLookDto) {
    const item = await this.characterModel.findById(params.id);
    const overwriteData = item.dressUp.map((val) => {
      if (val.id == params.id) {
        return {
          ...params.dressUpItem,
        };
      }
      return {
        ...val,
      };
    });
    item.overwrite({ dressUp: overwriteData });
    return await item.save();
  }
  /**
   * 修改形象
   */
  async serviceDeleteCharacterLook(params: {
    characterId: string;
    id: string;
  }) {
    const item = await this.characterModel.findById(params.characterId);
    const overwriteData = item.dressUp.filter((val) => val.id !== params.id);
    item.overwrite({ dressUp: overwriteData });
    return await item.save();
  }
}
