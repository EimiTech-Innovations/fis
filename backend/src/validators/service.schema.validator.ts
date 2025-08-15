import mongoose from 'mongoose';
import { z } from 'zod';

export const objectIdSchema = z
  .string()
  .refine((val) => mongoose.Types.ObjectId.isValid(val), {
    message: 'Invalid ObjectId',
  });

export const serviceSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(3, { message: 'Service name must be at least 3 characters long' })
      .max(50, { message: 'Service name cannot be longer than 50 characters' }),
    description: z.string().optional(),
    plans: z.array(objectIdSchema).optional(),
    isActive: z.boolean().default(false),
  }),
});
