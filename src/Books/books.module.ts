import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { BookSchema } from './schemas/book.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }])],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply()
      // .exclude(
      //   { path: 'example', method: RequestMethod.GET },
      // )
      .forRoutes(BooksController);
  }
}
