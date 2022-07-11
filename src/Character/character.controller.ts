import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query, UsePipes,
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
   * @param params
   */
  @Get('/list')
  async getCharacterList(@Query() params: { bookId: string }) {
    const data = await this.characterService.serviceCharacterList(params);
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
   */
  @Delete('/delete')
  async DeleteCharacter(@Query() query: { id: string }) {
    const item = await this.characterService.serviceDeleteCharacter(query.id);
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
   * 获取角色列表
   * @param query
   */
  @Get('/detail')
  async DetailCharacter(@Query() query: { id: string }) {
    const item = await this.characterService.serviceDetailCharacter(query.id);
    return new CharacterDto(item);
  }
}
