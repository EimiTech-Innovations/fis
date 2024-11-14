import mongoose from 'mongoose';

export enum Role {
  SUPER_ADMIN = 'SUPER_ADMIN',
  BUSINESS_OWNER = 'BUSINESS_OWNER',
}

export type IAvatar = {
  url: string;
  id: string;
};

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: Role;
  business: mongoose.Types.ObjectId[];
  avatar?: IAvatar;
  resetPasswordToken?: string;
  resetPasswordTokenExpiry?: string;
}
