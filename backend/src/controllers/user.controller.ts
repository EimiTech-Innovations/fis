import { Request, Response, NextFunction } from 'express';
import { asyncHandler } from '../helper/asynchandler.helper';
import { User } from '../models/user.model';
import { ApiError } from '../helper/apiError.helper';

/**
 * @GET_PROFILE
 * @ROUTE @GET {{URL}}/api/v1/user
 * @returns All Users
 * @ACCESS Private (Admins and user)
 */
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

/**
 * @GET_ALL_USERS
 * @ROUTE @GET {{URL}}/api/v1/users
 * @returns All Users
 * @ACCESS Private (Admins)
 */
export const getAllUser = asyncHandler(async (req, res, next) => {
  const users = await User.find({});

  if (!users.length) {
    return next(new ApiError('No Users Found', 404));
  }

  res.status(200).json({
    success: true,
    message: 'All Users fetch Successfully',
    users,
  });
});
