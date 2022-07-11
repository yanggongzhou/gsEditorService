import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ICharacter } from '@/Character/interfaces/character.interface';
import CreateCharacterDto from '@/Character/dto/create-character.dto';
import UpdateCharacterDto from '@/Character/dto/update-character.dto';

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
    // todo - 添加装扮
    item.overwrite({ ...params });
    return await item.save();
  }
  /**
   * 角色详情
   */
  async serviceDetailCharacter(id: string) {
    return this.characterModel.findById(id);
  }
}
