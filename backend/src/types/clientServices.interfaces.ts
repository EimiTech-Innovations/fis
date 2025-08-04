import Mongoose from 'mongoose';

export interface IClientServices extends Mongoose.Document {
  clientId: Mongoose.Types.ObjectId;
  serviceId: Mongoose.Types.ObjectId;
  planId: Mongoose.Types.ObjectId;
  isEnable: boolean;
  startDate: Date;
  endDate: Date;
}
