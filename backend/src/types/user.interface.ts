import mongoose from 'mongoose';

export type IAvatar = {
  url: string;
  id: string;
};

export interface IUser extends Document {
  name: string;
  email: string;
  password: string | undefined;
  role: string;
  client?: mongoose.Types.ObjectId[];
  avatar?: IAvatar;
  resetPasswordToken?: string;
  resetPasswordTokenExpiry?: string;
  comparePassword(plainPassword: string): boolean;
  generateAccessToken(): string;
  generatePasswordResetToken(): string;
}

// jwt payload type
export interface IJwtPayload {
  user_id: string;
  role: string;
}

export enum Role {
  ADMIN = 'admin',
  SUPER_ADMIN = 'super_admin',
}
