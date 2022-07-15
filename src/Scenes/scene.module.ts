import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerMiddleware } from '@/common/middlewares/logger.middleware';
import { SceneController } from '@/Scenes/scene.controller';
import { SceneService } from '@/Scenes/scene.service';
import { SceneSchema } from '@/Scenes/schemas/scene.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Scene', schema: SceneSchema }])],
  controllers: [SceneController],
  providers: [SceneService],
})
export class SceneModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .exclude(
      //   { path: 'example', method: RequestMethod.GET },
      // )
      .forRoutes(SceneController);
  }
}
