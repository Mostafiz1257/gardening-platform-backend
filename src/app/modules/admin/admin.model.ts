// admin.model.ts
import mongoose, { Schema, Document } from 'mongoose';
import { IAdminAction } from './admin.interface';

const adminSchema: Schema = new Schema({
  admin: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  action: {
    type: String,
    required: true,
  },
  target: {
    type: Schema.Types.ObjectId,
    refPath: 'targetModel',
  },
  targetModel: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const AdminAction = mongoose.model<IAdminAction & Document>('AdminAction', adminSchema);
