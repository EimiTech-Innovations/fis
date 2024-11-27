import { asyncHandler } from '../helper/asynchandler.helper';
import { Request, Response, NextFunction } from 'express';
import { User } from '../models/user.model';
import { ApiError } from '../helper/apiError.helper';

/**
 * @REGISTER
 * @ROUTE @POST {{URL}}/api/v1/auth/new
 * @returns  Access token(response) and user created successfully message
 * @ACCESS Public
 */
export const registerUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body;

    // check if the user already exist
    const userExist = await User.findOne({ email }).lean();
    if (userExist) {
      return next(
        new ApiError('User with the provided email already exist', 400)
      );
    }

    const user = await User.create({
      name,
      email,
      password,
      role: 'BUSINESS_OWNER',
      avatar: {
        id: email,
        avatarUrl:
          'https://res.cloudinary.com/ddvlwqjuy/image/upload/v1732556502/j4boyhwiw55fz9be8ihe.jpg',
      },
    });

    if (!user) {
      return next(new ApiError('User registration failed!', 400));
    }

    // TODO: mail set up

    // get access token
    const accessToken = await user.generateAccessToken();

    // set the cookie
    res.cookie('token', accessToken, {
      secure: process.env.NODE_ENV === 'production' ? true : false,
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: 'none', // all request
    });

    // Respond with success
    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: user,
    });
  }
);

/**
 * TODO: check if the user other fields are over-written
 * @LOGIN
 * @ROUTE @POST {{URL}}/api/v1/auth/login
 * @returns  Access token(response) and user login message
 * @ACCESS Public
 */
export const userLogin = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.comparePassword(password))) {
      return next(new ApiError('Invalid user credentials provided', 400));
    }

    // generate token
    const accessToken = await user.generateAccessToken();

    // set the cookie
    res.cookie('token', accessToken, {
      secure: process.env.NODE_ENV === 'production' ? true : false,
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: 'none', // all request
    });

    user.password = undefined;

    res.status(200).json({
      success: true,
      message: 'User loggedIn successfully',
      accessToken,
      user,
    });
  }
);

/**
 * @LOGOUT
 * @ROUTE @POST {{URL}}/api/v1/auth/logout
 * @returns  remove the access token and logout the user
 * @ACCESS Private
 */
export const userLogout = asyncHandler(async (_req: Request, res: Response) => {
  // set the cookie
  res
    .cookie('token', '', {
      secure: process.env.NODE_ENV === 'production' ? true : false,
      httpOnly: true,
      maxAge: 1,
      sameSite: 'none', // all request
    })
    .json({
      success: true,
      message: 'User logout successfully',
    });
});
