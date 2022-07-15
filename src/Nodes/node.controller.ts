import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { NodeService } from './node.service';
import CreateNodeDto from '@/Nodes/dto/create-node.dto';
import UpdateNodeDto from '@/Nodes/dto/update-node.dto';
import NodeDto from '@/Nodes/dto/node.dto';

@Controller('/api/node')
export class NodeController {
  constructor(private readonly nodeService: NodeService) {}

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
      new CreateNodeDto({ bookId, chapterId, sceneContent, sceneNum }
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
}
