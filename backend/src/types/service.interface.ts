import mongoose from 'mongoose';

// This is mainly the service or service type - like DineConnect, FoodConnect, etc.
export interface IServices extends Document {
  name: string;
  description?: string;
  plans: mongoose.Types.ObjectId[];
  isActive: boolean;
}
