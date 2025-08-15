import Mongoose from 'mongoose';

export interface IClientServices extends Mongoose.Document {
  client: Mongoose.Types.ObjectId;
  service: Mongoose.Types.ObjectId;
  plan: Mongoose.Types.ObjectId;
  isEnable: boolean;
  startDate: Date;
  endDate: Date;
}
