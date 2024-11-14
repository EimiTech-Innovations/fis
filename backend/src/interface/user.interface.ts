import mongoose from 'mongoose';

export enum Role {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'Admin',
}

type IAvatar = {
  url: string;
  id: string;
};

export interface IUser extends Document {
  companyName: string;
  firstName: string;
  lastName: string;
  role: Role;
  email: string;
  password: string;
  category: mongoose.Types.ObjectId;
  message?: string;
  resetPasswordToken?: string;
  avatar?: IAvatar;
  resetPasswordTokenExpiry?: string;
}
