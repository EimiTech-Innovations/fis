import mongoose, { Schema } from 'mongoose';
import { IUser, Role } from '../interface/user.interface';

const userSchema = new mongoose.Schema<IUser>({
  companyName: {
    type: String,
    required: [true, 'Company name is required'],
    minLength: [4, 'Company name should be atleast 4 characters'],
    maxLength: [30, 'Company name cannot be longer than 30 characters'],
    trim: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    minLength: [4, 'First name should be atleast 4 characters'],
    maxLength: [30, 'First name cannot be longer than 30 characters'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    minLength: [4, 'First name should be atleast 4 characters'],
    maxLength: [30, 'First name cannot be longer than 30 characters'],
    trim: true,
  },
  role: {
    type: String,
    enum: Object.values(Role),
    required: [true, 'Role is required'],
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
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  message: {
    type: String,
    minlength: [10, 'The message Length should be minimum 10 characters'],
    maxLength: [30, 'The message length should be maximum 30 characters'],
  },

  resetPasswordToken: {
    type: String,
    default: null,
  },
  resetPasswordTokenExpiry: {
    type: Date,
    default: null,
  },
});

export const UserModel = mongoose.model<IUser>('User', userSchema);
