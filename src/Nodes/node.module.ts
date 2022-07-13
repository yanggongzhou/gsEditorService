import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerMiddleware } from '@/common/middlewares/logger.middleware';
import { NodeSchema } from '@/Nodes/schemas/node.schema';
import { NodeController } from '@/Nodes/node.controller';
import { NodeService } from '@/Nodes/node.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Node', schema: NodeSchema }])],
  controllers: [NodeController],
  providers: [NodeService],
})
export class NodeModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .exclude(
      //   { path: 'example', method: RequestMethod.GET },
      // )
      .forRoutes(NodeController);
  }
}
