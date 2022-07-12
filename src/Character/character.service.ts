import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ICharacter } from '@/Character/interfaces/character.interface';
import CreateCharacterDto from '@/Character/dto/create-character.dto';
import UpdateCharacterDto, {
  UpdateCharacterLookDto,
} from '@/Character/dto/update-character.dto';
import { getGuid } from '@/utils/guid';

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
    return this.characterModel.findByIdAndUpdate(params.id, { ...params });
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
    const newDressUpItem = {
      ...params.dressUpItem,
      id: getGuid(),
    };
    return this.characterModel.findByIdAndUpdate(params.id, {
      $push: { dressUp: newDressUpItem },
    });
  }

  /**
   * 修改形象
   */
  async serviceEditCharacterLook(params: UpdateCharacterLookDto) {
    const item = await this.characterModel.findById(params.id);
    item.dressUp = item.dressUp.map((val) => {
      if (val.id === params.dressUpItem.id) {
        return params.dressUpItem;
      }
      return val;
    });
    return item.save();
  }
  /**
   * 删除形象
   */
  async serviceDeleteCharacterLook(params: {
    characterId: string;
    id: string;
  }) {
    const item = await this.characterModel.findById(params.characterId);
    const index = item.dressUp.findIndex((val) => val.id === params.id);
    if (index !== -1) {
      item.dressUp.splice(index, 1);
    }
    return item.save();
  }
}
