import mongoose from 'mongoose';
import { z } from 'zod';

export const clientSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(4, { message: 'Name should be at least 4 characters' })
      .max(30, { message: 'Name cannot be longer than 30 characters' }),
    contact: z
      .string()
      .min(10, { message: 'Contact should be at least 10 characters' })
      .max(15, { message: 'Contact cannot be longer than 15 characters' }),
    service: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
      message: 'Invalid service ID format',
    }),
    status: z.enum(['ACTIVE', 'INACTIVE', 'BLOCKED']).optional(),
    avatar: z
      .object({
        id: z.string().optional(),
        avatarUrl: z.string().url().optional(),
      })
      .optional(),
  }),
});
