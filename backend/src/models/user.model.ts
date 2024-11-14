import mongoose from 'mongoose';
import { IUser, Role } from '../interface/user.interface';
import { string } from 'zod';

const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      minLength: [4, 'Name should be atleast 4 characters'],
      maxLength: [30, 'Name cannot be longer than 30 characters'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      minLength: [6, 'Email should be atleast 4 characters'],
      maxLength: [40, 'Email cannot be longer than 30 characters'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters long'],
      maxLength: [20, 'Password cannot be more than 20 characters'],
    },
    role: {
      type: String,
      enum: Object.values(Role),
      required: [true, 'Role is required'],
    },

    business: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Business',
      },
    ],

    avatar: {
      id: {
        type: string,
      },
      avatarUrl: {
        type: string,
      },
    },

    resetPasswordToken: {
      type: String,
      default: null,
    },
    resetPasswordTokenExpiry: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model<IUser>('User', userSchema);
