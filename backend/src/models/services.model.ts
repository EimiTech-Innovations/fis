import mongoose from 'mongoose';
import { IServices } from '../types/service.interface';

const servicesSchema = new mongoose.Schema<IServices>({
  name: {
    type: String,
    trim: true,
    minLength: [4, 'Service name should be atleast 4 characters'],
    maxLength: [50, 'Service name should be not more than 10 characters'],
    required: [true, 'service name is required'],
  },
  description: {
    type: String,
    trim: true,
    maxLength: [200, 'Description should not be more than 200 characters'],
  },
  plans: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Plan',
      required: [true, 'Plan ID is required'],
    },
  ],
  isActive: {
    type: Boolean,
    default: false,
  },
});

export const Services = mongoose.model<IServices>('Services', servicesSchema);
