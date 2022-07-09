import { IBook } from '@/Books/interfaces/book.interface';

export default class BookDto {
  constructor(object: IBook) {
    this.bookName = object.bookName;
    this.bookIntro = object.bookIntro || '';
    this.bookCover = object.bookCover || '';
    this.id = object._id;
  }
  readonly id: string;
  readonly bookName: string;
  readonly bookIntro: string;
  readonly bookCover: string;
}
