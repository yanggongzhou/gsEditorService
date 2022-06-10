import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './books.service';
import {
  ResponseSuccess,
  ResponseError,
  IResponse,
} from '../common/dto/response.dto';

@Controller('book')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('/')
  async getBookList(@Param() params): Promise<IResponse> {
    try {
      const list = await this.booksService.serviceBookList();
      return new ResponseSuccess('COMMON.SUCCESS', list);
    } catch (error) {
      return new ResponseError('COMMON.ERROR.GENERIC_ERROR', error);
    }
  }
}
