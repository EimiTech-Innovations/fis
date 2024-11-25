import { Request, Response, ErrorRequestHandler, NextFunction } from 'express';
import { ApiError } from '../helper/apiError.helper';

const errorMiddleware: ErrorRequestHandler = async (
  err: ApiError,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Internal Server Error';

  // Wrong MongoDB ID error
  if (err.name === 'CastError') {
    const message = `Resource not found. Invalid ${err.path}`;
    err = new ApiError(message, 400);
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyvalue)} entered`;
    err = new ApiError(message, 409);
  }

  // Wrong JWT Error
  if (err.name === 'JsonWebTokenError') {
    const message = `Json Web Token is invalid, try again`;
    err = new ApiError(message, 400);
  }

  // JWT expired Error
  if (err.name === 'TokenExpiredError') {
    const message = `Json Web Token is expired, try again`;
    err = new ApiError(message, 401);
  }

  if (process.env.NODE_ENV === 'production') {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  } else {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
      stack: err.stack,
    });
  }
};

export default errorMiddleware;
