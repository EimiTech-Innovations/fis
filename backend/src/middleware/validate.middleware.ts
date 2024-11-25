/* eslint-disable @typescript-eslint/no-explicit-any */
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
    } catch (error: any) {
      console.log(error);
      const allErrors = error.issues.map(
        (issue: any) =>
          issue.path.join() + ' ' + issue.message + ' ' + issue.expected
      );
      const errorMessage = allErrors.join(', ');
      console.log(errorMessage);
      return next(new ApiError(errorMessage, 400));
    }
  };

export default validate;
