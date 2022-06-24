// success: true => message, data
// success: false => errorMessage, error
interface IResponse<T> {
  success: boolean;
  message: string;
  errorMessage: string;
  data: T;
  error: any;
}

export class ResponseError<T> implements IResponse<T> {
  constructor(infoMessage: string, data?: any) {
    this.success = false;
    this.message = infoMessage;
    this.data = data;
    console.warn(
      new Date().toString() +
        ' - [Response]: ' +
        infoMessage +
        (data ? ' - ' + JSON.stringify(data) : ''),
    );
  }
  message: string;
  data: T;
  errorMessage: any;
  error: any;
  success: boolean;
}

export class ResponseSuccess<T> implements IResponse<T> {
  constructor(infoMessage: string, data?: any) {
    this.success = true;
    this.message = infoMessage;
    this.data = data;

    const obfuscateRequest = JSON.parse(JSON.stringify(data));
    console.log(
      new Date().toString() +
        ' - [Response]: ' +
        JSON.stringify(obfuscateRequest),
    );
  }
  message: string;
  data: T;
  errorMessage: any;
  error: any;
  success: boolean;
}

// // example
// try {
//   const data = await this.booksService.serviceBookList();
//   const { list } = new BookDto(data);
//   return new ResponseSuccess('COMMON.SUCCESS', list);
// } catch (error) {
//   return new ResponseError('COMMON.ERROR.GENERIC_ERROR', error);
// }
