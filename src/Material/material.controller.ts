import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { MaterialService } from './material.service';
import { ValidationPipe } from '@/pipe/validation.pipe';
import MaterialDto from '@/Material/dto/material.dto';
import CreateMaterialDto from '@/Material/dto/create-material.dto';
import UpdateMaterialDto from '@/Material/dto/update-material.dto';

@Controller('/api/material')
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}

  /**
   * 获取素材列表
   * @param typeOne
   * @param typeTwo
   */
  @Get('/list')
  async getMaterialList(
    @Query('typeOne') typeOne: string,
    @Query('typeTwo') typeTwo: string,
  ) {
    console.log('params----------_>', typeOne, typeTwo);
    const data = await this.materialService.serviceMaterialList({ typeOne });
    return data.map((val) => new MaterialDto(val));
  }

  /**
   * 创建素材
   * @param params CreateMaterialDto
   */
  @UsePipes(new ValidationPipe()) // 使用管道验证
  @Post('/save')
  async CreateMaterial(@Body() params: CreateMaterialDto) {
    const item = await this.materialService.serviceCreateMaterial(params);
    return new MaterialDto(item);
  }
  /**
   * 删除素材
   */
  @Delete('/delete')
  async DeleteMaterial(@Query() query: { id: string }) {
    const item = await this.materialService.serviceDeleteMaterial(query.id);
    return new MaterialDto(item);
  }
  /**
   * 编辑素材
   */
  @Post('/edit')
  async EditMaterial(@Body() params: UpdateMaterialDto) {
    return await this.materialService.serviceEditMaterial(params);
  }
}
