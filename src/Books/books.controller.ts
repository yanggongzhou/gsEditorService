import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './books.service';
import {
  ResponseSuccess,
  ResponseError, IResponse,
} from '@/common/dto/response.dto';
import BookDto from '@/Books/dto/book.dto';
import { IBook } from '@/Books/interfaces/book.interface';

@Controller('book')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  /**
   * 获取书籍列表
   * @param params 活动ID
   */
  @Get('/')
  async getBookList(@Param() params: string): Promise<IBook[]> {
    const data = await this.booksService.serviceBookList();
    const { list } = new BookDto(data);
    return data;
    // try {
    //   const data = await this.booksService.serviceBookList();
    //   const { list } = new BookDto(data);
    //   return new ResponseSuccess('COMMON.SUCCESS', list);
    // } catch (error) {
    //   return new ResponseError('COMMON.ERROR.GENERIC_ERROR', error);
    // }
  }
}
