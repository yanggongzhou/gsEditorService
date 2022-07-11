import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ModifyInterceptor } from '@/common/interceptor/modify.interceptor';
import { AllExceptionsFilter } from '@/common/filters/all-exception.filter';
import * as bodyParser from 'body-parser';
import { NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { ValidationPipe } from '@/pipe/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 全局拦截器
  app.useGlobalInterceptors(new ModifyInterceptor());
  // 全局过滤
  app.useGlobalFilters(new AllExceptionsFilter());
  // 全局管道
  app.useGlobalPipes(new ValidationPipe());

  app.use(bodyParser.json({ limit: '5mb' }));
  app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));

  /* SECURITY */
  // app.enable('trust proxy'); // Example: app.enable('x-powered-by')
  // Helmet是一系列帮助增强Node.JS之Express/Connect等Javascript Web应用安全的中间件。
  app.use(helmet());
  // 每个IP 15 分钟限制一百条数据
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
      message: 'Too many requests from this IP, please try again later',
    }),
  );
  // const createAccountLimiter = rateLimit({
  //   windowMs: 60 * 60 * 1000, // 1 hour window
  //   max: 3, // start blocking after 3 requests
  //   message:
  //     'Too many accounts created from this IP, please try again after an hour',
  // });
  // app.use('/auth/email/register', createAccountLimiter);
  // /******/

  await app.listen(1234);
}
(async () => await bootstrap())();
