import { Request, Response, NextFunction } from 'express';
import { asyncHandler } from '../helper/asynchandler.helper';
import { JwtPayload } from 'jsonwebtoken';
import { ApiError } from '../helper/apiError.helper';

import jwt from 'jsonwebtoken';
import { IJwtPayload } from '../types/user.interface';
declare module 'express' {
  export interface Request {
    user?: IJwtPayload;
  }
}

export const isLoggedIn = asyncHandler(
  async (req: Request, _res: Response, next: NextFunction) => {
    let token: string | JwtPayload;

    // check for the token availability
    if (
      req.headers &&
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer ')
    ) {
      token = req?.headers?.authorization?.split(' ')[1];
    } else {
      return next(new ApiError('You are not authorized, please login', 401));
    }

    if (!token) {
      return next(new ApiError('You are not authorized, please login', 401));
    }

    //   decode jwt and store inside the request body (req.user)
    const decoded = (await jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET as string
    )) as IJwtPayload;

    if (!decoded) {
      return next(new ApiError('Unauthorized, please login', 401));
    }

    req.user = decoded;

    next();
  }
);

// export const authorizeRoles = (...roles: IROLES) => {
//   asyncHandler(async (req, _res, next) => {
//     if (!roles.includes(req.user?.role)) {
//       return next(
//         new ApiError('You are not authorized to access this route', 403)
//       );
//     }

//     next();
//   });
// };
