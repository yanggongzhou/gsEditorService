import { IBook } from '@/Books/interfaces/book.interface';

export default class BookDto {
  constructor(list: IBook[]) {
    this.list = list;
  }
  readonly list: IBook[];
}
