import { Request, Response, NextFunction } from 'express';

export interface IFunction {
  (req: Request, res: Response, next: NextFunction): Promise<unknown>;
}

export const asyncHandler = (fn: IFunction) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((err) => next(err));
  };
};
