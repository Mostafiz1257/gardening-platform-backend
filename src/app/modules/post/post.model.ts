// post.model.ts
import mongoose, { Schema, Document } from 'mongoose';
import { IPost } from './post.interface';

const PostSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: {
      type: [String], // Array of strings
      default: [],
    },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    category: { type: String, required: true },
    isPremium: { type: Boolean, default: false },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }], // Assuming you have a Comment model
  },
  {
    timestamps: true,
  },
);

export const Post = mongoose.model<IPost & Document>('Post', PostSchema);
