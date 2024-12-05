import mongoose from 'mongoose';
import { z } from 'zod';

// Custom Zod validator for a single MongoDB ObjectId
export const objectIdSchema = z
  .string()
  .refine((val) => mongoose.Types.ObjectId.isValid(val), {
    message: 'Invalid ObjectId',
  });

// user registration
export const userRegistrationSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(4, { message: 'Name is should be atleast 4 characters' })
      .max(30, { message: 'Name cannot be longer than 30 characters' }),
    email: z.string().email({ message: 'Invalid email format' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' }),
    role: z.enum(['SUPER_ADMIN', 'BUSINESS_OWNER']).optional(),
    business: z.array(objectIdSchema).optional(),

    avatar: z
      .object({
        id: z.string(),
        avatarUrl: z.string().url(),
      })
      .optional(),
    resetpasswordToken: z.string().optional(),
    resetpasswordExpiry: z.string().optional(),
  }),
});

// userLogin
export const userLoginSchema = z.object({
  body: z.object({
    email: z.string().email({ message: 'Invalid email format' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' }),
  }),
});

// forgotPassword
export const userForgotPasswordSchema = z.object({
  body: z.object({
    email: z.string().email({
      message: 'Invalid email format',
    }),
  }),
});

// resetPassword
export const userResetPasswordSchema = z.object({
  body: z.object({
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' }),
  }),
});
