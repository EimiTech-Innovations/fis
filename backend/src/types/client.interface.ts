import mongoose from 'mongoose';
import { IAvatar } from './user.interface';

export enum status {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  BLOCKED = 'BLOCKED',
}

export interface IClient extends mongoose.Document {
  name: string;
  contact: string;
  status: status;
  service?: mongoose.Types.ObjectId;
  avatar?: IAvatar;
  owner: mongoose.Types.ObjectId;
}
