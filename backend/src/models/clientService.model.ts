import mongoose from 'mongoose';
import { IClientServices } from '../types/clientServices.interfaces';

const servicesSchema = new mongoose.Schema<IClientServices>({
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: [true, 'Client ID is required'],
  },
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: [true, 'Service ID is required'],
  },
  planId: {
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
  servicesSchema
);
