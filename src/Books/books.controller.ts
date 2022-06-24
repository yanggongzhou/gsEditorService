import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './books.service';
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
    return list;
  }
}
