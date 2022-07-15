import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { SceneService } from './scene.service';
import SceneDto from '@/Scenes/dto/scene.dto';
import CreateSceneDto from '@/Scenes/dto/create-scene.dto';
import UpdateSceneDto from '@/Scenes/dto/update-scene.dto';

@Controller('/api/scene')
export class SceneController {
  constructor(private readonly sceneService: SceneService) {}

  /**
   * 获取节点子项列表
   * @param bookId
   * @param chapterId
   */
  @Get('/list')
  async getSceneList(
    @Query('bookId') bookId: string,
    @Query('chapterId') chapterId: string,
  ) {
    const data = await this.sceneService.serviceSceneList(bookId, chapterId);
    return data.map((val) => new SceneDto(val));
  }

  /**
   * 创建节点子项
   * @param params CreateSceneDto
   */
  @Post('/save')
  async CreateScene(@Body() params: CreateSceneDto) {
    const item = await this.sceneService.serviceCreateScene(params);
    return new SceneDto(item);
  }

  /**
   * 删除节点子项
   */
  @Delete('/delete')
  async DeleteScene(@Query() query: { id: string }) {
    const item = await this.sceneService.serviceDeleteScene(query.id);
    return new SceneDto(item);
  }
  /**
   * 编辑节点子项
   */
  @Put('/edit')
  async EditScene(@Body() params: UpdateSceneDto) {
    return await this.sceneService.serviceEditScene(params);
  }
}
