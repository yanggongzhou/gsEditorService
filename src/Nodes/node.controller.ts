import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { NodeService } from './node.service';
import CreateNodeDto from '@/Nodes/dto/create-node.dto';
import UpdateNodeDto from '@/Nodes/dto/update-node.dto';
import NodeDto from '@/Nodes/dto/node.dto';
import { ISceneItem, TemplateTypeEnum } from '@/Scenes/interfaces/scene.interface';
import SceneDto from '@/Scenes/dto/scene.dto';
import CreateSceneDto from '@/Scenes/dto/create-scene.dto';

@Controller('/api/node')
export class NodeController {
  constructor(private readonly nodeService: NodeService) {
  }

  /**
   * 获取节点列表
   * @param bookId
   * @param chapterId
   */
  @Get('/list')
  async getNodeList(
    @Query('bookId') bookId: string,
    @Query('chapterId') chapterId: string,
  ) {
    const data = await this.nodeService.serviceNodeList(bookId, chapterId);
    if (!Array.isArray(data) || data.length === 0) {
      const params = new CreateNodeDto({
        bookId,
        chapterId,
        sceneContent: 'new Scene',
        sceneNum: '1',
      });
      await this.nodeService.serviceCreateNode(params);
    }

    return data.map((val) => new NodeDto(val));
  }

  /**
   * 创建节点
   * @param bookId
   * @param chapterId
   * @param sceneContent
   * @param sceneNum
   */
  @Post('/save')
  async CreateNode(
    @Body('bookId') bookId: string,
    @Body('chapterId') chapterId: string,
    @Body('sceneContent') sceneContent?: string,
    @Body('sceneNum') sceneNum?: string,
  ) {
    const item = await this.nodeService.serviceCreateNode(
      new CreateNodeDto({ bookId, chapterId, sceneContent, sceneNum },
      ),
    );
    return new NodeDto(item);
  }

  /**
   * 删除节点
   */
  @Delete('/delete')
  async DeleteNode(@Query() query: { id: string }) {
    const item = await this.nodeService.serviceDeleteNode(query.id);
    return new NodeDto(item);
  }

  /**
   * 编辑节点
   */
  @Put('/edit')
  async EditNode(@Body() params: UpdateNodeDto) {
    return await this.nodeService.serviceEditNode(params);
  }

  /**
   * 创建节点子项
   * @param params SceneDto
   */
  @Post('/scene/save')
  async CreateScene(@Body() params: SceneDto) {
    const item = await this.nodeService.serviceCreateScene(params);
    return new NodeDto(item);
  }
  /**
   * 编辑节点子项
   */
  @Put('/scene/edit')
  async EditScene(@Body() params: ISceneItem) {
    return await this.nodeService.serviceEditScene(params);
  }
  /**
   * 删除节点子项
   */
  @Delete('/scene/delete')
  async DeleteScene(@Query('id') id: string, @Query('nodeId') nodeId: string) {
    const item = await this.nodeService.serviceDeleteScene({ id, nodeId });
    return new NodeDto(item);
  }

  /**
   * 创建节点子项Branch， 默认添加两个option
   * @param params ISceneItem
   */
  @Post('/branch/save')
  async CreateBranch(@Body() params: CreateSceneDto) {
    const item = await this.nodeService.serviceCreateBranch(params);
    return new NodeDto(item);
  }

  /**
   * 删除节点子项
   */
  @Delete('/branch/delete')
  async DeleteBranch(@Query('id') id: string, @Query('nodeId') nodeId: string) {
    const item = await this.nodeService.serviceDeleteBranch({ id, nodeId });
    return new NodeDto(item);
  }
}
