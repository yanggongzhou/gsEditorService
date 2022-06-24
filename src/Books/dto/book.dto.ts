import { IBook } from '@/Books/interfaces/book.interface';

export default class BookDto {
  constructor(list: Array<IBook>) {
    this.list = list;
  }
  readonly list: Array<IBook>;
}
