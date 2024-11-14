import { z } from 'zod';

// TODO: 2 cross check the avatar url, it should be object
export const userZodSchema = z.object({
  companyName: z
    .string()
    .min(4, { message: 'Company name should be atleast 4 characters' })
    .max(30, { message: 'Company name cannot be longer than 30 characters' }),
  firstName: z
    .string()
    .min(4, { message: 'First name should be atleast 4 characters' })
    .max(30, { message: 'First name cannot be longer than 30 characters' }),
  lastName: z
    .string()
    .min(4, { message: 'Last name is should be atleast 4 characters' })
    .max(30, { message: 'Last name cannot be longer than 30 characters' }),
  role: z.enum(['SUPER_ADMIN', 'ADMIN']),
  email: z.string().email({ message: 'Invalid email format' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 6 characters long' }),
  category: z.string().optional(),
  message: z
    .string()
    .min(10, {
      message: 'It should minimum of 10 characters',
    })
    .max(30, {
      message: 'The message length should be maximum 30 characters',
    }),
  avatar: z.string().url().optional(),
  resetpasswordToken: z.string().optional(),
  resetpasswordExpiry: z.date().optional(),
});
