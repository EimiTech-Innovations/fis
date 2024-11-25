import { Request, Response, NextFunction } from 'express';

import { AnyZodObject } from 'zod';
import { ApiError } from '../helper/apiError.helper';

const validate =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return next(new ApiError(error, 400));
    }
  };

export default validate;
