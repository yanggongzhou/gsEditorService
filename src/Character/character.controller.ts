import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { CharacterService } from './character.service';
import CreateCharacterDto from '@/Character/dto/create-character.dto';
import UpdateCharacterDto from '@/Character/dto/update-character.dto';
import CharacterDto from '@/Character/dto/character.dto';
import { ValidationPipe } from '@/pipe/validation.pipe';

@Controller('/api/character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  /**
   * 获取角色列表
   * @param bookId
   */
  @Get('/list')
  async getCharacterList(@Query('bookId') bookId: string) {
    const data = await this.characterService.serviceCharacterList(bookId);
    return data.map((val) => new CharacterDto(val));
  }

  /**
   * 创建角色
   * @param params CreateCharacterDto
   */
  @UsePipes(new ValidationPipe()) // 使用管道验证
  @Post('/save')
  async CreateCharacter(@Body() params: CreateCharacterDto) {
    const item = await this.characterService.serviceCreateCharacter(params);
    return new CharacterDto(item);
  }
  /**
   * 删除角色
   * @param id
   */
  @Delete('/delete')
  async DeleteCharacter(@Query('id') id: string) {
    const item = await this.characterService.serviceDeleteCharacter(id);
    return new CharacterDto(item);
  }
  /**
   * 编辑角色
   */
  @Post('/edit')
  async EditCharacter(@Body() params: UpdateCharacterDto) {
    return await this.characterService.serviceEditCharacter(params);
  }
  /**
   * 获取角色详情
   * @param id
   */
  @Get('/detail')
  async DetailCharacter(@Query('id') id: string) {
    const item = await this.characterService.serviceDetailCharacter(id);
    return new CharacterDto(item);
  }
}
