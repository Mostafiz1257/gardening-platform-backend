import mongoose, { Schema } from "mongoose";
import { IVote } from "./vote.interface";

const voteSchema = new Schema<IVote>({
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
    voteType: {
      type: String,
      enum: ['upvote', 'downvote'],
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
export const Vote = mongoose.model<IVote>('Vote', voteSchema);