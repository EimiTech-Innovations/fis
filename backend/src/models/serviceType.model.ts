import mongoose from 'mongoose';
import { IServiceTypes } from '../interface/serviceTypes.interface';

const serviceTypesSchema = new mongoose.Schema<IServiceTypes>({
  name: {
    type: String,
    trim: true,
    minLength: [4, 'Category name should be atleast 4 characters'],
    maxLength: [10, 'Category name should be not more than 10 characters'],
  },
});

export const Category = mongoose.model<IServiceTypes>(
  'Category',
  serviceTypesSchema
);
