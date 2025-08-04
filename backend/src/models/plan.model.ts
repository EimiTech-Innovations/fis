import mongoose from 'mongoose';
import { IPlan } from '../types/plan.interface';

const planSchema = new mongoose.Schema<IPlan>({
  name: {
    type: String,
    trim: true,
    minLength: [4, 'Service name should be atleast 4 characters'],
    maxLength: [30, 'Service name should be not more than 10 characters'],
    required: [true, 'service name is required'],
  },
  description: {
    type: String,
    trim: true,
    maxLength: [200, 'Description should not be more than 200 characters'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  currency: {
    type: String,
    required: [true, 'Currency is required'],
  },
  billingCycle: {
    type: String,
    enum: ['MONTHLY', 'YEARLY', 'ONE_TIME'],
    required: [true, 'Billing cycle is required'],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isFree: {
    type: Boolean,
    default: false,
  },
});

export const plan = mongoose.model<IPlan>('Plan', planSchema);
