import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChapterController } from '@/Chapters/chapter.controller';
import { LoggerMiddleware } from '@/common/middlewares/logger.middleware';
import { ChapterService } from '@/Chapters/chapter.service';
import { ChapterSchema } from '@/Chapters/schemas/chapter.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Chapter', schema: ChapterSchema }]),
  ],
  controllers: [ChapterController],
  providers: [ChapterService],
})
export class ChapterModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .exclude(
      //   { path: 'example', method: RequestMethod.GET },
      // )
      .forRoutes(ChapterController);
  }
}
