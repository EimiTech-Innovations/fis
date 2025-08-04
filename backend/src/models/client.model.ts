import mongoose from 'mongoose';
import { IClient, status } from '../types/client.interface';

const clientSchema = new mongoose.Schema<IClient>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      minLength: [4, 'Name should be atleast 4 characters'],
      maxLength: [30, 'Name cannot be longer than 30 characters'],
      trim: true,
    },

    contact: {
      type: String,
      required: [true, 'Contact is required'],
      trim: true,
      minLength: [10, 'Contact should be atleast 10 characters'],
      maxLength: [12, 'Contact cannot be longer than 12 characters'],
    },

    //TODO: add this feature later
    avatar: {
      id: {
        type: String,
      },
      avatarUrl: {
        type: String,
      },
    },
    serviceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Service',
      required: [true, 'Service ID is required'],
    },
    status: {
      type: String,
      enum: Object.values(status),
      default: status.INACTIVE,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model<IClient>('Client', clientSchema);
