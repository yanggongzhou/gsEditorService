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
    return data.map((val) => new NodeDto(val));
  }

  /**
   * 创建节点
   * @param params CreateNodeDto
   */
  @Post('/save')
  async CreateNode(@Body() params: CreateNodeDto) {
    const item = await this.nodeService.serviceCreateNode(params);
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
