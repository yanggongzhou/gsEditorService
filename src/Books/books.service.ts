import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IBook } from '@/Books/interfaces/book.interface';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel('Book') private readonly bookModel: Model<IBook[]>,
  ) {}
  async serviceBookList(): Promise<IBook[]> {
    return await this.bookModel.find().exec();
  }
}
