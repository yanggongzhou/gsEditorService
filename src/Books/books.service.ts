import { Model } from 'mongoose';
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IBook } from '@/Books/interfaces/book.interface';
import CreateBookDto from '@/Books/dto/create-book.dto';
import UpdateBookDto from '@/Books/dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel('Book') private readonly bookModel: Model<IBook>,
  ) {}
  /**
   * 获取书籍列表
   */
  async serviceBookList(): Promise<IBook[]> {
    return await this.bookModel.find().exec();
  }
  /**
   * 创建书籍
   */
  async serviceCreateBook(params: CreateBookDto) {
    if (params.bookName) {
      const newBook = new this.bookModel(params);
      return await newBook.save();
    } else {
      throw new HttpException('书名称不合规', HttpStatus.FORBIDDEN);
    }
  }
  /**
   * 删除书籍
   */
  async serviceDeleteBook(id: string) {
    if (id) {
      return this.bookModel.findByIdAndDelete(id);
    } else {
      throw new HttpException('ssss', HttpStatus.FORBIDDEN);
    }
  }
  /**
   * 编辑书籍
   */
  async serviceEditBook(params: UpdateBookDto) {
    const item = await this.bookModel.findById(params.id);
    item.overwrite({ ...params });
    return await item.save();
  }
  /**
   * 书籍详情
   */
  async serviceDetailBook(id: string) {
    return this.bookModel.findById(id);
  }
}
