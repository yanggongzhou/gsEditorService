import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  HttpException,
} from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    // if (status === HttpStatus.UNAUTHORIZED)
    //   return response.status(status).render('views/401');
    // if (status === HttpStatus.NOT_FOUND)
    //   return response.status(status).render('views/404');
    // if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
    //   if (process.env.NODE_ENV === 'production') {
    //     console.error(exception.stack);
    //     return response.status(status).render('views/500');
    //   } else {
    //     const message = exception.stack;
    //     return response.status(status).send(message);
    //   }
    // }
    console.log('exception.message--------------------->');
    console.error(exception.message);
    response.status(status).json({
      code: status,
      message: exception.message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
