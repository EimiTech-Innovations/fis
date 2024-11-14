import { z } from 'zod';

export const serviceTypes = z.object({
  name: z
    .string()
    .min(4, { message: 'Name must be at least 4 characters long' })
    .max(16, { message: 'Name must be no more than 16 characters long' }),
  description: z
    .string()
    .min(10, { message: 'Description must be at least 10 characters long' })
    .max(50, {
      message: 'Description must be no more than 50 characters long',
    })
    .optional(),
});
