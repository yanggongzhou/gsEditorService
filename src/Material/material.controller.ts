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
import {
  LookTypeEnum,
  MaterialTypeEnum,
} from '@/Material/interfaces/material.interface';

@Controller('/api/material')
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}

  /**
   * 获取素材列表
   * @param materialType
   * @param lookType
   */
  @Get('/list')
  async getMaterialList(
    @Query('materialType') materialType: MaterialTypeEnum,
    @Query('lookType') lookType?: LookTypeEnum,
  ) {
    console.log('lookType------>', lookType);
    const data = await this.materialService.serviceMaterialList({
      materialType,
      lookType,
    });
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
