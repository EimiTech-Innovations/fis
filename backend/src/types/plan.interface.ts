import Mongoose from 'mongoose';

export enum BillingCycle {
  MONTHLY = 'MONTHLY',
  YEARLY = 'YEARLY',
  ONE_TIME = 'ONE_TIME',
}

export interface IPlan extends Mongoose.Document {
  name: string;
  description?: string;
  price: number;
  currency?: string;
  isActive: boolean;
  billingCycle: BillingCycle;
  isFree: boolean;
}
