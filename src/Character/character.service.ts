import { Model } from 'mongoose';
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
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
  async serviceCharacterList(params: {
    bookId: string;
  }): Promise<ICharacter[]> {
    return await this.characterModel.find(params).exec();
  }
  /**
   * 创建角色
   */
  async serviceCreateCharacter(params: CreateCharacterDto) {
    if (params.characterName) {
      const newCharacter = new this.characterModel(params);
      return await newCharacter.save();
    } else {
      throw new HttpException('角色名称不合规', HttpStatus.FORBIDDEN);
    }
  }
  /**
   * 删除角色
   */
  async serviceDeleteCharacter(id: string) {
    if (id) {
      return this.characterModel.findByIdAndDelete(id);
    } else {
      throw new HttpException('ssss', HttpStatus.FORBIDDEN);
    }
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
}
