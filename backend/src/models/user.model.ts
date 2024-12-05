import mongoose from 'mongoose';
import { IUser, Role } from '../types/user.interface';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

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
        type: String,
      },
      avatarUrl: {
        type: String,
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

// hash password
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcryptjs.hash(this.password as string, 10);
});

// user schema methods
userSchema.methods = {
  // password compare method
  comparePassword: async function (plainPassword: string) {
    return bcryptjs.compare(plainPassword, this.password);
  },

  // access token generation
  generateAccessToken: async function () {
    return jwt.sign(
      { user_id: this._id, role: this.role },
      process.env.ACCESS_TOKEN_SECRET as string,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
      }
    );
  },

  // generate password reset token
  generatePasswordResetToken: async function () {
    const resetToken = crypto.randomBytes(20).toString('hex');
    this.resetPasswordToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    this.resetPasswordTokenExpiry = Date.now() + 15 * 60 * 1000;
    return resetToken;
  },
};

export const User = mongoose.model<IUser>('User', userSchema);
