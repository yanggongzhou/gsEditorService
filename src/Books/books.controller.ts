import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { BooksService } from './books.service';
import BookDto from '@/Books/dto/book.dto';
import CreateBookDto from '@/Books/dto/create-book.dto';
import UpdateBookDto from '@/Books/dto/update-book.dto';

@Controller('/api/book')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  /**
   * 获取书籍列表
   * @param params
   */
  @Get('/list')
  async getBookList(@Param() params: string) {
    const data = await this.booksService.serviceBookList();
    return data.map((val) => new BookDto(val));
  }

  /**
   * 创建书籍
   * @param params CreateBookDto
   */
  @Post('/save')
  async CreateBook(@Body() params: CreateBookDto) {
    const item = await this.booksService.serviceCreateBook(params);
    return new BookDto(item);
  }

  /**
   * 删除书籍
   */
  @Delete('/delete')
  async DeleteBook(@Query() query: { id: string }) {
    const item = await this.booksService.serviceDeleteBook(query.id);
    return new BookDto(item);
  }
  /**
   * 编辑书籍
   */
  @Post('/edit')
  async EditBook(@Body() params: UpdateBookDto) {
    return await this.booksService.serviceEditBook(params);
  }
  /**
   * 获取书籍列表
   * @param query
   */
  @Get('/detail')
  async DetailBook(@Query() query: { id: string }) {
    const item = await this.booksService.serviceDetailBook(query.id);
    return new BookDto(item);
  }
}
