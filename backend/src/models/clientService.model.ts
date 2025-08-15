import mongoose from 'mongoose';
import { IClientServices } from '../types/clientServices.interfaces';

const clientServiceSchema = new mongoose.Schema<IClientServices>({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: [true, 'Client ID is required'],
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: [true, 'Service ID is required'],
  },
  plan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plan',
    required: [true, 'Plan ID is required'],
  },
  isEnable: {
    type: Boolean,
    default: true,
  },
  startDate: {
    type: Date,
    required: [true, 'Start date is required'],
  },
  endDate: {
    type: Date,
  },
});
export const clientServices = mongoose.model<IClientServices>(
  'clientServices',
  clientServiceSchema
);
