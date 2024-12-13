import { describe, it, vi, expect, beforeEach } from 'vitest';
import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { userRegistrationSchema } from '../../../validators/auth.schema.validator';
import { User } from '../../../models/user.model';
import { registerUser } from '../../../controllers/auth.controller';

// Mock the Mongoose User model to isolate the controller logic from the database
vi.mock('../../../models/user.model');

describe('User Register endpoints', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  // Initialize a fresh mock for req, res, and next before each test
  beforeEach(() => {
    req = {
      body: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'password123',
      },
    };
    res = {
      status: vi.fn().mockReturnThis(), // Mock the status method to allow chaining
      json: vi.fn(), // Mock the json method to capture responses
      cookie: vi.fn(), // Mock the cookie method to verify cookies set by the controller
    };
    next = vi.fn(); // Mock the next function to capture error handling
  });

  it('should register a user successfully', async () => {
    // Mock Zod validation to simulate a successful validation
    const parseMock = vi
      .spyOn(userRegistrationSchema, 'parse')
      .mockImplementationOnce(() => req.body);

    // Mock `User.findOne` to simulate no user exists with the given email
    vi.spyOn(User, 'findOne').mockResolvedValueOnce(null);

    // Mock `User.create` to simulate successful user creation and return a mock user object
    vi.spyOn(User, 'create').mockResolvedValueOnce({
      ...req.body,
      generateAccessToken: vi.fn().mockResolvedValueOnce('mockedToken'), // Mock the access token generation
    });

    // Call the controller function with mocked inputs
    await registerUser(req as Request, res as Response, next);

    // Assert that Zod validation was called with the request body
    expect(parseMock).toHaveBeenCalledWith(req.body);

    // Assert that the controller checked for existing users
    expect(User.findOne).toHaveBeenCalledWith({ email: req.body.email });

    // Assert that the controller created a new user with the correct data
    expect(User.create).toHaveBeenCalledWith(
      expect.objectContaining({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: 'BUSINESS_OWNER',
      })
    );

    // Assert that a cookie with the access token was set
    expect(res.cookie).toHaveBeenCalledWith('token', 'mockedToken', {
      secure: false, // Not secure in non-production environments
      httpOnly: true, // Prevent access via client-side JavaScript
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days expiration
      sameSite: 'none', // Cookie is sent on cross-site requests
    });

    // Assert that the response status was set to 201 (Created)
    expect(res.status).toHaveBeenCalledWith(201);

    // Assert that the response contains the success message and user data
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      message: 'User registered successfully',
      user: expect.objectContaining({
        name: 'John Doe',
        email: 'johndoe@example.com',
      }),
    });
  });

  //   it('should call next with a validation error if Zod validation fails', async () => {
  //     // Mock Zod validation to fail with an invalid email error
  //     const parseMock = vi
  //       .spyOn(userRegistrationSchema, 'parse')
  //       .mockImplementationOnce(() => {
  //         throw new z.ZodError([
  //           { path: ['email'], message: 'Invalid email address' }, // Mock validation error
  //         ]);
  //       });

  //     // Call the controller function
  //     await registerUser(req as Request, res as Response, next);

  //     // Assert that Zod validation was called with the request body
  //     expect(parseMock).toHaveBeenCalledWith(req.body);

  //     // Assert that the `next` function was called with the validation error
  //     expect(next).toHaveBeenCalledWith(
  //       expect.objectContaining({
  //         message: 'Invalid email address', // The error message from Zod validation
  //       })
  //     );
  //   });

  it('should call next with an error if user creation fails', async () => {
    // Mock Zod validation to pass
    vi.spyOn(userRegistrationSchema, 'parse').mockImplementationOnce(
      () => req.body
    );

    // Mock `User.findOne` to simulate no user exists with the given email
    vi.spyOn(User, 'findOne').mockResolvedValueOnce(null);

    // Mock `User.create` to simulate a failure during user creation
    vi.spyOn(User, 'create').mockRejectedValueOnce(new Error('Database error'));

    // Call the controller function
    await registerUser(req as Request, res as Response, next);

    // Assert that `findOne` was called to check for existing users
    expect(User.findOne).toHaveBeenCalledWith({ email: req.body.email });

    // Assert that `create` was called to attempt user creation
    expect(User.create).toHaveBeenCalled();

    // Assert that the `next` function was called with a custom error
    expect(next).toHaveBeenCalledWith(
      expect.objectContaining({
        message: 'User registration failed!', // Custom error message for user creation failure
        statusCode: 400, // HTTP 400 Bad Request
      })
    );
  });
});
