import { z } from 'zod';
import { BillingCycle } from '../types/plan.interface';
import mongoose from 'mongoose';

export const planSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(4, { message: 'Plan name must be at least 4 characters long' })
      .max(30, { message: 'Plan name cannot be longer than 30 characters' }),
    description: z.string().optional(),
    price: z.number().min(0, { message: 'Price must be a positive number' }),
    billingCycle: z.nativeEnum(BillingCycle, {
      message: 'Billing cycle must be one of MONTHLY, YEARLY, or ONE_TIME',
    }),
    currency: z.string().optional(),
    isActive: z.boolean().default(true),
    isFree: z.boolean().default(false),
  }),
});
