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
    favorite: [
      {
        type: Schema.Types.ObjectId,
        ref: "Favorite",
      },
    ],
    category: { type: String, required: true },
    isPremium: { type: Boolean, default: false },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Like",
      },
    ], 
    dislikes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Dislike",
      },
    ],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }], 
  },
  {
    timestamps: true,
  },
);

export const Post = mongoose.model<IPost & Document>('Post', PostSchema);
