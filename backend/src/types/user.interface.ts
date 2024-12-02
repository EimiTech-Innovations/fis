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
  password: string | undefined;
  role: Role;
  business?: mongoose.Types.ObjectId[];
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
  role: number;
}
