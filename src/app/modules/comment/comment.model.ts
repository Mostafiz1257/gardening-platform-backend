// comment.model.ts
import mongoose, { Schema, Document } from 'mongoose';
import { IComment } from './comment.interface';

const commentSchema: Schema = new Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Comment = mongoose.model<IComment & Document>('Comment', commentSchema);
