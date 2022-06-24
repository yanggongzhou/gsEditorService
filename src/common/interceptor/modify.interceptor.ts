import {
  Injectable,
  NestInterceptor,
  CallHandler,
  ExecutionContext,
  BadGatewayException,
  RequestTimeoutException,
  HttpStatus,
} from '@nestjs/common';
import { catchError, map, timeout } from 'rxjs/operators';
// import * as util from 'util';
import { Observable, throwError, TimeoutError } from 'rxjs';

export interface IResponse<T> {
  result: T;
  code: number;
  message: string;
}

@Injectable()
export class ModifyInterceptor<T> implements NestInterceptor<T, IResponse<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<IResponse<T> | any> {
    // // 拿到 response 对象
    // const response = context.switchToHttp().getResponse();
    // console.log('response---->', response);
    // // 将 render 回调函数转成一个 promisify 然后绑定执行的上下文
    // const render = util.promisify(response.render.bind(response));
    // console.log('render---->', render);
    return next.handle().pipe(
      timeout(5000),
      catchError((err) => {
        if (err instanceof TimeoutError) {
          return throwError(() => new RequestTimeoutException());
        }
        return throwError(() => new BadGatewayException());
      }),

      map((result) => {
        console.log(
          `${new Date().toString()} - [Response result] - ${JSON.stringify(
            result,
          )}`,
        );
        return {
          result,
          code: HttpStatus.OK,
          message: (result as any).message || '响应成功',
        };
      }),
    );
  }
}
