import { z } from 'zod';
import { objectIdSchema } from './auth.schema.validator';

export const businessZodSchema = z.object({
  name: z
    .string()
    .min(4, { message: 'Name is should be atleast 4 characters' })
    .max(30, { message: 'Name cannot be longer than 30 characters' }),

  owner: z
    .string()
    .min(4, { message: 'Name is should be atleast 4 characters' })
    .max(30, { message: 'Name cannot be longer than 30 characters' }),

  businessType: z.enum(['SERVICE_BASE', 'PRODUCT_BASE']),
  billingSystem: z.string(objectIdSchema),
});
