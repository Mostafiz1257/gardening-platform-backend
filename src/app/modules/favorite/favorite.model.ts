
import mongoose, { Schema, Document } from 'mongoose';
import { IFavorite } from './favorite.interface';

const favoriteSchema: Schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Favorite = mongoose.model<IFavorite & Document>('Favorite', favoriteSchema);
