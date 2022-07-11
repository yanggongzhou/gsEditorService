import { IsNotEmpty } from 'class-validator';

export default class CreateBookDto {
  @IsNotEmpty({ message: '书名不能为空' })
  readonly bookName: string;
  readonly bookIntro: string;
  readonly bookCover: string;
}