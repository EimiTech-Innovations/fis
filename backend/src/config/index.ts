import dotenv from 'dotenv';
import { IConfigValues } from '../interface/config.interface';
dotenv.config();

export const configValues: IConfigValues = {
  PORT: process.env.PORT || 8082,
  NODE_ENV: process.env.NODE_ENV === 'production' ? 'https' : 'http',
};
