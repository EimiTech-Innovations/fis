import { Request, Response, NextFunction } from 'express';
import { asyncHandler } from '../helper/asynchandler.helper';
import { User } from '../models/user.model';
import { ApiError } from '../helper/apiError.helper';

export const me = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findById(req.user?.user_id);

    if (!user) {
      return next(new ApiError('Your not authorized, please login', 401));
    }
    res.status(200).json({
      success: true,
      message: 'Profile details fetched successfully',
      user,
    });
  }
);
