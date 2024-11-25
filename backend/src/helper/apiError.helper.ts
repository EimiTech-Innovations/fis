export interface IApiError extends Error {
  statusCode: number;
}

export class ApiError extends Error implements IApiError {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  keyvalue(keyValue: unknown) {
    throw new Error('Method not implemented');
  }

  code: number | undefined;
  path: unknown;
  constructor(
    message: string,
    public statusCode: number
  ) {
    super(message);
    this.code = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}
