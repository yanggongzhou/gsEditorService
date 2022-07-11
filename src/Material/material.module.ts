import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MaterialController } from './material.controller';
import { MaterialService } from './material.service';
import { MaterialSchema } from './schemas/material.schema';
import { LoggerMiddleware } from '@/common/middlewares/logger.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Material', schema: MaterialSchema }]),
  ],
  controllers: [MaterialController],
  providers: [MaterialService],
})
export class MaterialModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .exclude(
      //   { path: 'example', method: RequestMethod.GET },
      // )
      .forRoutes(MaterialController);
  }
}
