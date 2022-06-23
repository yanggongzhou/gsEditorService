// success: true => message, data
// success: false => errorMessage, error
export interface IResponse {
  success: boolean;
  message: string;
  errorMessage: string;
  data: any[];
  error: any;
}

export class ResponseError implements IResponse {
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
  data: any[];
  errorMessage: any;
  error: any;
  success: boolean;
}

export class ResponseSuccess implements IResponse {
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
  data: any[];
  errorMessage: any;
  error: any;
  success: boolean;
}
